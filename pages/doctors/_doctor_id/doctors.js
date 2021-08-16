export default {
  auth: false,
  layout: 'dashboard',
  data() {
    return {
      profile: {
        id: 0,
        avatar: '~/assets/images/Muzan_Anime_Profile.png',
        name: 'DR NEIL LAQUIHON',
        content: `KDHI, DIKAPAWAN CITY`,
        number: '09187829876',
        description:
          'Doctors, also known as Physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well being.',
      },
    }
  },
  mounted() {
    this.getDoctor()
  },
  methods: {
    getDoctor() {
      this.$axios.get('user/' + this.$route.params.doctor_id).then((data) => {
        console.log(data)
      })
    },
  },
}
