export default {
  layout: 'dashboard',
  data() {
    return {
      results: [
        {
          icon: 'mdi-doctor',
          name: 'Dr. Neil Laquizon',
          swiper: '<<< Swipe left to see <<<',
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
          swiper: '<<< Swipe left to see <<<',
          content: 'Sent Medical Prescription',
          date: 'Dec 25, 2020',
        },
      ],
    }
  },
}
