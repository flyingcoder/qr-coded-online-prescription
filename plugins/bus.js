import Vue from 'vue'

export const bus = new Vue()

export default (_context, inject) => {
  // Client only
  if (process.client) {
    // Event bus for plugins
    inject('bus', bus)
  }
}
