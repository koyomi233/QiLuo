import Api from './api.js'

export default {
  fetchAllAccount () {
    return Api().get('/account')
  },
  fetchAccountByEmail (email){
    return Api().get(`/account/emails/${email}`)
  },
  creatAccount (account){
    return Api().post('/account', account,
      { headers: {'Content-type': 'application/json'} })
  }
}
