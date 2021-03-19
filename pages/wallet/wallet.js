export default {
  layout: 'dashboard',
  auth: false,
  methods: {
    delayLoad(event) {
      setTimeout(() => {
        this.$router.push(event.target.pathname)
      }, 2000)
    },
    total_price(item) {
      return item.price * item.qty
    },
    increase(qty) {
      return (qty += 1)
    },
    decrease(qty) {
      return (qty -= 1)
    },
  },
  computed: {
    total_quantity_amount() {
      let sum = 0
      this.payments.forEach((e) => {
        sum += e.price * e.qty
      })
      return sum
    },
    total_quantity() {
      let sum = 0
      this.payments.forEach((e) => {
        sum += e.qty
      })
      return sum
    },
    overall_total() {
      return this.total_quantity_amount + this.service_fee
    },
  },
  data() {
    return {
      ex11: true,
      snackbar: false,
      amount: '1,000.00',
      counter: 0,
      service_fee: 4.2,

      payments: [
        {
          id: 1,
          name: 'Colchicine ',
          dose: '0.6mg',
          qty: 31,
          price: 2.0,
        },
        {
          id: 2,
          name: 'Celecoxib',
          dose: '200mg',
          qty: 14,
          price: 4.5,
        },
        {
          id: 3,
          name: 'Paracetamol',
          dose: '500mg',
          qty: 20,
          price: 5.5,
        },
      ],
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
          credit: 'Add new Card',
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
