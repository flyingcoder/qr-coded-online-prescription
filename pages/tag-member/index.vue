<template>
  <div class="tag-member pa-2">
    <div class="tag-header text-center py-3 d-flex justify-center align-center">
      <v-icon class="pr-2">mdi-account-group</v-icon>
      <span style="font-size: 20px; font-weight: 400">Tag Members</span>
    </div>
    <div class="tag-body">
      <div class="tag-family">
        <div class="tag-header py-3 px-2 d-flex">
          <v-icon class="pr-2">mdi-human-male-female-child</v-icon>
          <span style="font-size: 20px; font-weight: 400">Family Members</span>
        </div>
        <div class="class-input">
          <div v-for="input in family" :key="input.id" class="input-group">
            <div class="d-flex">
              <v-text-field
                v-model="input.first_name"
                label="First Name"
                class="px-2"
                style="width: 50%"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="input.last_name"
                label="Last Name"
                style="width: 50%"
                class="px-2"
                outlined
                dense
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="input.birthday"
                label="BirthDay"
                type="date"
                style="width: 50%"
                class="px-2"
                outlined
                dense
              ></v-text-field>
              <v-select
                v-model="input.sex"
                :items="sex"
                label="Sex"
                style="width: 50%"
                class="px-2"
                dense
                outlined
              ></v-select>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="input.relationship"
                label="Relationship"
                style="width: 50%"
                class="px-2"
                outlined
                dense
              ></v-text-field>
              <div style="width: 50%" class="px-2">
                <v-btn color="error" @click="deleteFamily(input.id)">
                  <v-icon left> mdi-plus </v-icon>
                  Remove
                </v-btn>
              </div>
            </div>
            <v-divider class="pb-3"></v-divider>
          </div>
          <v-btn color="success" @click="addFamily">
            <v-icon left> mdi-plus </v-icon>
            add
          </v-btn>
        </div>
      </div>
      <div class="tag-dependent mt-5">
        <div class="tag-header py-3 px-2 d-flex">
          <v-icon class="pr-2">mdi-account-supervisor</v-icon>
          <span style="font-size: 20px; font-weight: 400">Dependent</span>
        </div>
        <div class="class-input">
          <div v-for="input in dependent" :key="input.id" class="input-group">
            <div class="d-flex">
              <v-text-field
                v-model="input.first_name"
                label="First Name"
                class="px-2"
                style="width: 50%"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="input.last_name"
                label="Last Name"
                style="width: 50%"
                class="px-2"
                outlined
                dense
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="input.birthday"
                label="Birthday"
                type="date"
                style="width: 50%"
                class="px-2"
                outlined
                dense
              ></v-text-field>
              <v-select
                v-model="input.sex"
                :items="sex"
                label="Sex"
                style="width: 50%"
                class="px-2"
                dense
                outlined
              ></v-select>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="input.relationship"
                label="Relationship"
                style="width: 50%"
                class="px-2"
                outlined
                dense
              ></v-text-field>
              <div style="width: 50%" class="px-2">
                <v-btn color="error" @click="deleteDependent(input.id)">
                  <v-icon left> mdi-plus </v-icon>
                  Remove
                </v-btn>
              </div>
            </div>
            <v-divider class="pb-3"></v-divider>
          </div>
          <v-btn color="success" @click="addDependent">
            <v-icon left> mdi-plus </v-icon>
            add
          </v-btn>
        </div>
      </div>
    </div>
    <div class="tag-footer py-6">
      <v-btn color="success" @click="exit">
        <v-icon left> mdi-arrow-left </v-icon>
        Back
      </v-btn>
      <v-btn v-if="family.length || dependent.length" color="success">
        <v-icon left> mdi-content-save </v-icon>
        Save Changes
      </v-btn>
    </div>
  </div>
</template>
<script src="./tag-member.js"></script>
<style lang="scss" src="./tag-member.scss" scoped></style>
