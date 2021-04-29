export default {
  name: 'Pharmacy',
  layout: 'dashboard',
  data() {
    return {
      grid: true,
      align: '',
      pharmacy_medicine: [
        {
          avatar: '/_nuxt/assets/images/pharmacy-logo.jpg',
          name: 'Brennen Drugs Co.',
          time: 'Open 24 hours',
          place: 'DAVAO DEL SUR',
        },
        {
          avatar: '/_nuxt/assets/images/pharmacy-logo.jpg',
          name: 'Cherry Street Pharmacy.',
          time: 'Open 24 hours',
          place: 'Door 1, GMSA · 0923 738 3905',
        },
        {
          avatar: '/_nuxt/assets/images/pharmacy-logo.jpg',
          name: 'City Drug.',
          time: 'Open . Closes 9PM',
          place: 'DAVAO DEL SUR, Davao del Sur',
        },
      ],
    }
  },
}
