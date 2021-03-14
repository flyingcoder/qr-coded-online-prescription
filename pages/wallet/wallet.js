export default {
  layout: 'dashboard',
  auth: false,
  data() {
    return {
      amount: '1,000.00',
      payment_method: [
        {
          id: 1,
          icon: 'mdi-wallet-outline',
          icon_inner: '',
          title: 'Reseta e-Wallet',
          content: '<div class="paynow-button text-center-pd">PAY NOW</div>',
          cancel: 'Cancel',
          yes: 'Yes',
        },
        {
          id: 2,
          icon: 'mdi-credit-card-multiple',
          icon_inner: '',
          title: 'Credit / Debit Card',
          confirm: 'CONFIRM SELECTION',
        },
        {
          id: 3,
          icon: 'mdi-account-cash',
          icon_inner: 'mdi-account-cash',
          title: 'GCash e-Wallet',
          content:
            'You can now use your GCash balance in Reseta. You will redirected to the GCash website to finish the payment.',
          confirm: 'CONFIRM SELECTION',
        },
        {
          id: 4,
          icon: 'mdi-cash',
          icon_inner: 'mdi-cash',
          title: 'Cash On Delivery',
          image: 'https://img.icons8.com/carbon-copy/100/000000/gcash.png',
          content:
            'Security Advicosry Pharmacy are not allowed tp ask you to order and transact your payments outside the platform.<br><br>When using our cash on Delivery services, payments is given to our official delivery partner upon to receipt of item.',
        },
      ],
    }
  },
}
