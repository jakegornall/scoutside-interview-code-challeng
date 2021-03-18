export const state = () => ({
  subtotal: 0,
  lineItems: [],
  error: '',
  isOpen: false,
})

export const mutations = {
  ADD(state, product) {
    state.lineItems.push(product)
    state.subtotal += product.price
  },
  CLEAR(state) {
    state.lineItems = []
    state.subtotal = 0
  },
  SET_ERROR(state, errorMessage) {
    state.error = errorMessage
  },
  OPEN(state) {
    state.isOpen = true
  },
  CLOSE(state) {
    state.isOpen = false
  },
}

export const actions = {
  async add({ commit }, productId) {
    const response = await this.$axios.post(`/api/cart/add`, { productId })

    response.status === 200
      ? commit('ADD', response.data)
      : commit('SET_ERROR', response.statusText)

    commit('OPEN')
  },
  async clear({ commit }) {
    const response = await this.$axios.post(`/api/cart/clear`)

    response.status === 200
      ? commit('CLEAR')
      : commit('SET_ERROR', response.statusText)

    commit('OPEN')
  },
  open({ commit }) {
    commit('OPEN')
  },
  close({ commit }) {
    commit('CLOSE')
  },
}
