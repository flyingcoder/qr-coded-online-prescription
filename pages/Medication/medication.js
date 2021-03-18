export default {
  name: 'medication',
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      doctors: [
        {
          id: 1,
          name: 'DR. NEIL LAQUIHON',
          tag: '',
          created_at: '12:27 AM',
          content: '1) Colchicine 0.6mg 1 tablet 3x a day',
          time: '5',
          note: 'Take after meals',
        },
        {
          id: 2,
          name: 'DR. NEIL LAQUIHON',
          tag: 'TAGGED TO: Maria Dela Cruz',
          created_at: 'Dec 25, 2020',
          content: '1) N-Acetylcysteine 600mg 1 tablet a day',
          time: '7',
          note: 'Dissolve 1 tablet in 1/2 glass water',
        },
        {
          id: 3,
          name: 'DR. WENG ARTES',
          tag: 'Maria Dela Cruz TAGGED YOU',
          created_at: 'Nov 7, 2020',
          content: '1) Azithromyain 500mg 1 tablet a day',
          time: '8',
          note: 'Take with meals',
        },
      ],
      medication: [
        {
          id: 1,
          name: 'DR. NEIL LAQUIHON',
          tag: '',
          created_at: '12:27 AM',
          content: '1) Colchicine 0.6mg 1 tablet 3x a day',
          time: '5',
          note: 'Take with meals, For 7 days',
        },
      ],
    }
  },
}
