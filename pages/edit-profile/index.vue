<template>
  <div class="edit-profile-page pb-10">
    <Preloader v-if="loading" />
    <div class="settings-header">
      <div class="back-btn align-self-center">
        <v-icon color="white" @click="exitprofile"> mdi-chevron-left </v-icon>
      </div>
      <div class="header-title align-self-center">Settings</div>
    </div>
    <div class="edit-profile-title ma-2">Edit Information</div>
    <div class="edit-profile-image mb-2">
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
    </div>
    <div class="edit-profile-inputs">
      <v-row style="display: none">
        <v-col>
          <v-text-field
            v-model="user_info.email"
            label="Email"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
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
      <v-row v-if="$auth.user.role !== 'pharmacy'" style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.birthday"
            label="Birthday"
            type="date"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            v-model="user_info.sex"
            :items="sex"
            label="Sex"
            dense
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row v-if="$auth.user.role === 'doctor'" style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.license_number"
            label="PRC Number"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="user_info.tin_number"
            label="TIN Number"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="$auth.user.role === 'doctor'" style="height: 70px">
        <v-col>
          <v-text-field
            v-model="user_info.experties"
            label="Specialty:"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="$auth.user.role !== 'pharmacy'" style="height: 70px">
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
      <div v-if="$auth.user.role == 'patient'">
        <div style="font-size: 12px">CO-MORBIDITY</div>
        <div>
          <v-radio-group v-model="user_info.morbidity" class="mt-0">
            <v-radio
              label="Essential Hypertension"
              value="EssentialHypertension"
            ></v-radio>
            <v-radio label="Diabetes" value="Diabetes"></v-radio>
            <v-radio label="Bronchial Asthma" value="BronchialAsthma"></v-radio>
          </v-radio-group>
        </div>
        <div style="font-size: 12px">OTHERS</div>
        <div class="pl-5">
          <v-text-field
            v-model="user_info.others"
            outlined
            dense
          ></v-text-field>
        </div>
        <div style="font-size: 12px">In Case of Emergency</div>
        <div class="pl-5 pt-2">
          <v-text-field
            v-model="user_info.person_to_contact"
            label="Person To Contact"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="user_info.person_to_contact_number"
            label="Mobile Number"
            outlined
            dense
          ></v-text-field>
        </div>
      </div>
      <v-row v-if="$auth.user.role === 'patient'" class="sm-side-padding">
      </v-row>
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
                <td style="padding-inline: 0 !important">
                  <v-checkbox
                    v-model="user_info.clinic_schedules"
                    class="sched-checkbox"
                    :label="date.day"
                    color="sucess"
                    :value="date"
                    @click="date.checker = !date.checker"
                  ></v-checkbox>
                </td>
                <td style="padding: 0 0 0 5px !important">
                  <v-text-field
                    v-if="date.checker"
                    v-model="date.start_time"
                    style="width: 90%"
                    outlined
                    type="time"
                    dense
                  ></v-text-field>
                </td>
                <td style="padding-left: 5px !important">
                  <v-text-field
                    v-if="date.checker"
                    v-model="date.end_time"
                    style="width: 90%"
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
      <!-- <v-row v-if="$auth.user.role == 'patient'" class="sm-side-padding">
        <v-textarea v-model="user_info.bio" outlined label="BIO"></v-textarea>
      </v-row> -->
    </div>
    <v-btn tile class="dark ml-3" @click="saveChanges">
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
