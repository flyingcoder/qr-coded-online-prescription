export default {
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      payment_method: [
        {
          id: 1,
          icon: 'mdi-wallet-outline',
          title: 'Reseta e-Wallet',
        },
        {
          id: 2,
          icon: 'mdi-credit-card-multiple',
          title: 'Credit / Debit Card',
        },
        {
          id: 3,
          icon: '',
          title: 'GCash e-Wallet',
        },
        {
          id: 4,
          icon: 'mdi-cash',
          title: 'Cash On Delivery',
        },
      ],
    }
  },
}
