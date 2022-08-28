<template>
  <v-list-item
    :key="item.fullname"
    class="page-list-title"
    @click="pharmacyLink(item.id)"
  >
    <v-list-item-avatar>
      <v-icon
        v-if="
          item.avatar == 'avatar.png' ||
          item.avatar ==
            'https://api.resetaqrx.com/storage/users/user-default.png'
        "
        class="user-icon"
        color="#1ac6b6"
        medium
      >
        mdi-medical-bag
      </v-icon>
      <img v-else class="user-icon" :src="item.avatar" :alt="item.fullname" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>
        <strong>{{ item.fullname }}</strong>
        <br />
        <span class="medicine-sub-info">
          {{ item.address }} &nbsp;&nbsp;<br />
          Store is {{ item.active_status ? 'open' : 'close' }}
        </span>
      </v-list-item-title>
    </v-list-item-content>
    <!-- <div class="pharmacy_price_medicine">₱ {{ item }}</div> -->

    <!-- <slot>
      <v-btn
        class="ma-2 list-contact-pharmacy"
        outlined
        x-small
        fab
        color="indigo"
        @click="$router.push('pharmacy/' + item.id)"
      >
        <v-icon>mdi-eye-outline</v-icon>
      </v-btn>
    </slot> -->
  </v-list-item>
</template>

<script>
export default {
  name: 'Pharmalist',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      medicine: this.item,
    }
  },
  mounted() {},
  methods: {
    pharmacyLink(pid) {
      this.$router.push('/pharmacy/' + pid)
    },
  },
}
</script>
<style lang="scss">
.medicine-sub-info {
  color: $black !important;
}
.pharmacy_price_medicine {
  padding-left: 70px;
  font-weight: 600;
  font-size: 20px;
}
</style>
