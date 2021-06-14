const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['white', 'white', 'white'],
]
export default {
  layout: 'dashboard',
  middleware: 'auth-pharmacy',
  data() {
    return {
      showLabels: false,
      labelSize: 7,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      sales_value: [3, 4, 7, 3, 9, 10, 9, 4, -7, -10, 4, 8, 7, 3, 0],
      rate_value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
      income_value: [1, 5, 3, 7, -2, 5, 7, 9, -4, -10, 3, 5, 2, 6, 9],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }
  },
}
