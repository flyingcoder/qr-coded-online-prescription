export default {
  auth: false,
  layout: 'dashboard',
  props: {
    single_doctor: {
      type: Object,
      default() {
        return {
          id: 0,
          avatar: '~/assets/images/Muzan_Anime_Profile.png',
          name: 'DR NEIL LAQUIHON',
          content: `KDHI, DIKAPAWAN CITY`,
          number: '09187829876',
          description:
            'Doctors, also known as Physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well being.',
        }
      },
    },
  },
  data() {
    return {
      grid: true,
      doctors: [
        { header: 'Doctors' },
        {
          id: 1,
          avatar: '~/assets/images/Muzan_Anime_Profile.png',
          title: 'DR NEIL LAQUIHON',
          content: `KDHI, DIKAPAWAN CITY`,
          number: '09187829876',
        },
        { divider: true, inset: true },
        {
          id: 2,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'DR WENG ARTES',
          content: `KDHI, DIKAPAWAN CITY`,
          number: '09187829876',
        },
        { divider: true, inset: true },
        {
          id: 3,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'DR DODGE PANAR',
          content: 'ALEXIAN, DAVAO CITY',
          number: '09187829876',
        },
        { divider: true, inset: true },
        {
          id: 4,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'DR ROY BARCINAS',
          content: 'CPH, KIDAPAWAN CITY',
          number: '09187829876',
        },
      ],
    }
  },
  methods: {
    doctorLink() {
      this.$router.push('/doctors/1')
    },
  },
}
