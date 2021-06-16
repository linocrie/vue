import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      products: [],
    }
  },
  getters: {
    cartProducts(state) {
      return state.cart.products;
    },
  },
  mutations: {
    addProductInCart(state, product) {
      state.cart.products.push(product);
    },
  },
  actions: {}
})
