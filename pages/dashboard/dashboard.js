export default {
  layout: 'dashboard',
  auth: true,
  methods: {
    swiper() {
      // this.$router.push('/login')
    },
  },

  data() {
    return {
      display: true,
      no_display: false,
      newsfeeds: [
        {
          id: 1,
          image: 'Tanjiro_Anime_Profile.png',
          name: 'Dr. Neil Laquinon',
          time: '12:30 PM',
          prescription: 'Your prescription is now ready',
        },
        {
          id: 2,
          image: 'Zenitsu_Anime_Profile.png',
          name: 'Mohammad Alongan',
          time: 'Feb 4',
          message:
            'Gud morning Po napalit ko napalit ko na ang tambal na gi tag nmo sa akoa...',
        },
        {
          id: 3,
          image: 'Muzan_Anime_Profile.png',
          name: 'Alvin Pacot',
          time: 'Dec 26, 2020',
          message:
            'Gud morning Po napalit ko napalit ko na ang tambal na gi tag nmo sa akoa...',
        },
        {
          id: 4,
          image: 'medical-pharmacy-logo.jpg',
          name: 'Medical Pharmacy',
          time: 'Aug 8, 2020',
          message:
            'Good morning sir your medications was bought Full by Ms. Maria Dela Cruz. Thank you for choosing Options Pharmacy',
        },
        {
          id: 5,
          image: 'Muzan_Anime_Profile.png',
          name: 'Alvin Pacot',
          time: 'May 18, 2020',
          prescription: 'Your prescription is now ready',
        },
      ],
    }
  },
}
