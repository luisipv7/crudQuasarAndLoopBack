import axios from 'axios'
import { Notify } from 'quasar'

export default ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 30000
  })

  Vue.mixin(AxiosCatchMixin)
}
/**
 * Mixin Para tratamento do Axios
 */
const AxiosCatchMixin = {
  methods: {
    AxiosCatch (error) {
      console.error(error)
      Notify.create({
        message: error.response.data.error.message,
        type: 'negative'
      })
    }
  }
}
