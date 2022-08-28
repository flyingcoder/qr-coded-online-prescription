<template>
  <div class="edit-profile-page">
    <Preloader v-if="loading" />
    <div class="edit-profile-title">Edit Profile</div>
    <div class="edit-profile-image">
      <img
        v-if="
          user_info.avatar == 'avatar.png' ||
          user_info.avatar ==
            'https://api.resetaqrx.com/storage/users/user-default.png'
        "
        :src="require(`~/assets/images/avatar.png`)"
        :alt="user_info.fullname"
      />

      <img v-else :src="user_info.avatar" :alt="user_info.fullname" />
      <div class="edit-image">
        <v-file-input
          v-model="profile_image"
          hide-input
          accept="image/*"
          solo
          autocomplete="off"
          class="change-profile-icon"
          prepend-icon="mdi-pencil"
          @change="displayImage"
        ></v-file-input>
      </div>
      <div class="back-button" @click="exitprofile">
        <v-icon color="darken-2"> mdi-close </v-icon>
      </div>
    </div>
    <div class="edit-profile-inputs">
      <v-row style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.fname"
            label="First Name"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="user_info.lname"
            label="Last Name"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.prc_number"
            label="PRC Number"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-if="
              $auth.user.role === 'pharmacy' || $auth.user.role === 'doctor'
            "
            v-model="user_info.tin_number"
            label="TIN Number"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.experties"
            label="Specialty:"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.clinic_name"
            label="Clinic Name:"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.clinic_address"
            label="Clinic Address:"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.phone"
            label="Clinic Number:"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="$auth.user.role == 'user'" style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.address"
            label="Address"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="$auth.user.role == 'patient'" style="height: 80px">
        <v-col
          ><v-text-field
            v-model="user_info.phone"
            label="Phone Number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            outlined
            dense
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row v-if="$auth.user.role === 'pharmacy'" class="sm-side-padding">
        <v-text-field
          v-model="user_info.license_number"
          label="License Number"
          outlined
          dense
        ></v-text-field>
      </v-row>
      {{ clinic_sched }}
      <div v-if="$auth.user.role === 'doctor'" class="clinic-schedule">
        <div class="clinic-sched-title">Clinic Schedule</div>
        <div class="clinic-sched-time">
          <!-- <input
            id="jack"
            v-model="clinic_sched"
            type="checkbox"
            value="Jack"
          />
          <label for="jack">Jack</label>

          <input
            id="john"
            v-model="clinic_sched"
            type="checkbox"
            value="John"
          />
          <label for="john">John</label>

          <input
            id="mike"
            v-model="clinic_sched"
            type="checkbox"
            value="Mike"
          />
          <label for="mike">Mike</label> -->
          <table style="width: 100%">
            <thead>
              <tr>
                <th width="33.33%"></th>
                <th width="33.33%">Start</th>
                <th width="33.33%">End</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="date in schedules" :key="date.id">
                <td>
                  <v-checkbox
                    v-model="clinic_sched"
                    class="sched-checkbox"
                    :label="date.day"
                    color="sucess"
                    :value="date"
                    @click="date.checker = !date.checker"
                  ></v-checkbox>
                </td>
                <td>
                  <v-text-field
                    v-if="date.checker"
                    v-model="date.start_time"
                    outlined
                    type="time"
                    dense
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-if="date.checker"
                    v-model="date.end_time"
                    outlined
                    type="time"
                    dense
                  ></v-text-field>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <v-row v-if="$auth.user.role == 'patient'" class="sm-side-padding">
        <v-textarea v-model="user_info.bio" outlined label="BIO"></v-textarea>
      </v-row>
    </div>
    <v-btn tile class="dark" @click="saveChanges">
      <v-icon left> mdi-content-save </v-icon>
      Save Changes
    </v-btn>
  </div>
</template>

<script src="./edit-profile.js"></script>
<style lang="scss" scoped>
>>> .change-profile-icon .v-input__prepend-outer {
  background: #00bcd4;
  padding: 10px;
  border-radius: 100%;
}
>>> .change-profile-icon .v-input__prepend-outer .v-icon {
  color: white;
}
>>> .change-profile-icon {
  padding-top: 0 !important;
}
.clinic-sched-title {
  font-size: 18px;
  font-weight: 500;
}
.clinic-sched-time {
  table {
    tbody {
      tr {
        height: 60px !important;
        td {
          padding: 0 20px;
          .sched-checkbox {
            margin-top: 0 !important;
          }
          .v-text-field {
            margin-bottom: -10px !important;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" src="./edit-profile.scss"></style>
