export default {
  auth: false,
  layout: 'dashboard',
  data() {
    return {
      product_name: [
        {
          id: 1,
          title: 'COLCHICINE',
        },
        {
          id: 2,
          title: 'N - ACETYLCYSTEINE',
        },
        {
          id: 3,
          title: 'AZITHROMYCIN',
        },
      ],
      products: [
        {
          id: 1,
          title: 'COLCHICINE',
          image: 'colchine.png',
          name: 'Colchicine 600mg',
          price: '2.00',
          store: 'OPTIONS',
        },
        {
          id: 2,
          title: 'COLCHICINE',
          image: 'colchine1.jpg',
          name: 'Colchicine 0.6mg',
          price: '2.45',
          store: 'MERCURY',
        },
        {
          id: 3,
          title: 'COLCHICINE',
          image: 'colchine2.jpg',
          name: 'Colchicine 0.6mg',
          price: '2.00',
          store: 'GENERICA',
        },
        {
          id: 4,
          title: 'COLCHICINE',
          image: 'colchine3.jpg',
          name: 'Colchicine 600mg',
          price: '2.00',
          store: 'MERCURY',
        },
        {
          id: 5,
          title: 'COLCHICINE',
          image: 'colchine4.jpg',
          name: 'Colchicine 600mg',
          price: '2.00',
          store: 'MERCURY',
        },
        {
          id: 6,
          title: 'COLCHICINE',
          image: 'colchine2.jpg',
          name: 'Colchicine 600mg',
          price: '2.00',
          store: 'MERCURY',
        },
        {
          id: 7,
          title: 'COLCHICINE',
          image: 'colchine3.jpg',
          name: 'Colchicine 600mg',
          price: '2.00',
          store: 'MERCURY',
        },
      ],
    }
  },
}
