import Api from '@/service/api'

export default {
  fetchPictures () {
    return Api().get('/picture')
  },
  postPicture (picture) {
    return Api().post('/picture', picture,
      { headers: {'Content-type': 'application/json'} })
  },
  deletePicture(id) {
    return Api().delete(`/picture/${id}`)
  },
  editPicture(id, picture) {
    console.log('REQUESTING ' + id + ' ' +
      JSON.stringify(picture, null, 5))
    return Api().put(`/picture/${id}/changeInfo`, picture,
      { headers: {'Content-type': 'application/json'} })
  }
}
