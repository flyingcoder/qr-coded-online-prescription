export default {
  name: 'doctor',
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      results: [
        {
          icon: 'mdi-account',
          name: 'Virginia Laquihon',
          prescribe: 'Prescribed:',
          content: 'Colchicine 0.6mg 1tab TID',
          date: '12:27 AM',
        },
        {
          icon: 'mdi-account',
          name: 'Generoso Laquihon',
          content: 'Doc pwede ko magpareseta ug akoang maintenance na tambal',
          date: 'Feb 4',
        },
        {
          icon: 'mdi-account',
          name: 'Teofista Buenaflor',
          content:
            'Gud pm doc pwede po ba ako magpa check -up sa inyo on saturday',
          date: 'Dec 31 2020',
        },
        {
          icon: 'mdi-hospital',
          name: 'Options Pharmacy',
          content:
            'Good morning po doc, sk lang po ako doc pwede po ba ang brand..',
          date: 'Aug 8 2020',
        },
      ],
    }
  },
}
