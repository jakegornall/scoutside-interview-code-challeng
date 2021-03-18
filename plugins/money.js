import Vue from 'vue'

Vue.filter('money', (value) => {
  let str = String(parseFloat(value) / 100)
  str += !str.includes('.') ? '.00' : '00'
  return `$${str.substring(0, str.indexOf('.') + 3)}`
})
