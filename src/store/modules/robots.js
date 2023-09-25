import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios
        .get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
    async addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios
        .post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
};

// namespaced && cartSaleItems -> this.$store.getters['robots/cartSaleItems']
// this.$store.dispatch("robots/addRobotToCart")

/*  
  robots: {
    cart: [],
    parts: null,
  },

  robots.cart
  robots.parts
*/
