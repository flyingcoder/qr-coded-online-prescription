<template>
  <div>
    <div>
      <v-card elevation="3" class="padding-bottom-sm">
        <div class="chatbox-undo" @click="back">
          <v-icon> mdi-arrow-left </v-icon>
        </div>
        <div class="doctor-profile-title text-center pt-3">
          DOCTOR'S PROFILE
        </div>
        <div class="user-profile text-center">
          <img
            v-if="
              profile.avatar == 'avatar.png' ||
              profile.avatar ==
                'https://api.resetaqrx.com/storage/users/user-default.png'
            "
            :src="require(`~/assets/images/avatar.png`)"
            :alt="profile.fname"
          />
          <img v-else :src="profile.avatar" :alt="profile.fname" />
        </div>
        <div class="doctor-information padding-content text-center-pd">
          <div class="name padding-bottom-sm pb-3">
            Dr. {{ profile.fullname }}
          </div>
          <div class="d-flex">
            <div class="d-flex pr-3">
              <v-text-field
                label="PRC Number"
                :value="profile.license_number"
                outlined
                dense
                disabled
              ></v-text-field>
            </div>
            <div class="d-flex pl-3">
              <v-text-field
                label="TIN Number"
                :value="profile.tin_number"
                outlined
                disabled
                dense
              ></v-text-field>
            </div>
          </div>
          <div class="d-flex">
            <v-text-field
              label="Specialty"
              :value="profile.experties"
              outlined
              disabled
              dense
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              label="Clinic Name"
              :value="profile.clinic_name"
              outlined
              disabled
              dense
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              label="Clinic Address"
              :value="profile.clinic_address"
              outlined
              disabled
              dense
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              label="Clinic Number"
              :value="profile.phone"
              outlined
              disabled
              dense
            ></v-text-field>
          </div>
          <div class="clinic-schedule">
            <div class="clinic-sched-title text-left">Clinic Schedule</div>
            <div class="clinic-sched-time">
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
                      <div style="padding-bottom: 25px" class="text-left">
                        {{ date.day }}
                      </div>
                    </td>
                    <td style="padding: 0 0 0 5px !important">
                      <v-text-field
                        v-model="date.start_time"
                        disabled
                        style="width: 90%"
                        outlined
                        type="time"
                        dense
                      ></v-text-field>
                    </td>
                    <td style="padding-left: 5px !important">
                      <v-text-field
                        v-model="date.end_time"
                        disabled
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
          <!-- <div class="clinic-schedule">
            <div class="clinic-sched-title d-flex">Clinic Schedule</div>
            <div class="clinic-sched-time">
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
                        v-model="date.schedules"
                        disabled
                        class="sched-checkbox"
                        :label="date.day"
                        color="sucess"
                        :value="date"
                      ></v-checkbox>
                    </td>
                    <td>
                      <v-text-field
                        v-model="date.start_time"
                        outlined
                        type="time"
                        dense
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
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
          </div> -->
          <div class="doctor-sched">
            <div class="doctor-sched-title d-flex">Affliated Hospitals</div>
            <div class="clinic-sched-time">
              <div class="d-block pt-4">
                <v-text-field
                  label="Name of Hospitals"
                  :value="profile.clinic_address"
                  outlined
                  disabled
                  dense
                ></v-text-field>
                <div class="d-flex pl-7">
                  <v-text-field
                    label="Phone Number"
                    :value="profile.clinic_address"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </div>
              </div>
              <div class="d-block pt-4">
                <v-text-field
                  label="Name of Hospitals"
                  :value="profile.clinic_address"
                  outlined
                  disabled
                  dense
                ></v-text-field>
                <div class="d-flex pl-7">
                  <v-text-field
                    label="Phone Number"
                    :value="profile.clinic_address"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center-pd padding-top-md">
          <v-btn
            depressed
            color="#1ac6b6"
            width="60%"
            class="btn-radius find-doctors-btn"
            style="color: white"
            @click="$router.push('/chatbox/' + profile.id)"
          >
            Contact
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'search-notification',
  middleware: 'auth',
  data() {
    return {
      profile: {},
      schedules: [],
    }
  },
  mounted() {
    this.getUser()
    this.getDoctorSched()
  },
  methods: {
    async getDoctorSched() {
      await this.$axios
        .get('schedule/' + this.$route.params.doctor_id)
        .then((data) => {
          this.schedules = data.data
        })
    },
    async getUser() {
      await this.$axios
        .get('user/' + this.$route.params.doctor_id)
        .then((data) => {
          this.profile = data.data
          console.log(this.profile)
        })
    },
    back() {
      this.$router.back()
    },
  },
}
</script>

<style src="../doctors.scss" lang="scss" scoped></style>
