import Vue from 'vue'
import moment from 'moment'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('readableDate', function (value) {
  if (!value) return ''
  return moment(value).format('ll')
})
