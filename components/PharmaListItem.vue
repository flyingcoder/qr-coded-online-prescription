<template>
  <v-list-item :key="item.fullname" class="pharmacy-list-section d-block">
    <v-list-item-avatar>
      <img :src="item.avatar" :alt="item.fullname" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>
        {{ item.fullname }}
        <br />
        <span class="medicine-sub-info">
          {{ item.address }} &nbsp;&nbsp;<br />
          Store is {{ item.active_status ? 'open' : 'close' }}
        </span>
      </v-list-item-title>
    </v-list-item-content>

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
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
