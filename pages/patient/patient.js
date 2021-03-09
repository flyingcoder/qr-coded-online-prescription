export default {
  layout: 'dashboard',
  auth: false,
  methods: {
    swiper() {
      // this.$router.push('/login')
    },
  },
  data() {
    return {
      items: [
        {
          src: '<<< Swipe left to see <<<',
        },
        {
          src: '',
        },
      ],
      results: [
        {
          icon: 'mdi-doctor',
          name: 'Dr. Neil Laquizon',
          swiper: true,
          content: 'Send Medical Prescription',
          date: '12:27 AM',
        },
        {
          icon: 'mdi-account',
          name: 'Maria Dela Cruz',
          content: 'Doc pwede ko magpareseta ug akoang maintenance na tambal',
          date: '8:00 AM',
        },
        {
          icon: 'mdi-hospital',
          name: 'Options Pharmacy',
          content:
            'Good morning sir your medications was bought Full by Ms. Maria Dela Cruz. Thank you for choosing Options Pharmacy.',
          date: '8:05 AM',
        },
        {
          icon: 'mdi-doctor',
          name: 'Dr. Weng Artes',
          swiper: true,
          content: 'Sent Medical Prescription',
          date: 'Dec 25, 2020',
        },
      ],
    }
  },
}
