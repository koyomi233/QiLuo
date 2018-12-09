import Api from './api.js'

export default {
  fetchAllAccount () {
    return Api().get('/account')
  },
  fetchAccountByEmail (email){
    return Api().get(`/account/emails/${email}`)
  }
}
