import axios from 'axios'
const URL = 'http://localhost:3004'
// Creadores de ACCIONES : Envían datos desde la aplicación hacia el store
export function artistList (keywords) {
  const request = axios.get(`${URL}/artists?q=${keywords}`)
    .then(response => response.data)
// formato de la acción definido por el flux standard
  return {
  //Tipo de acción a realizar
    type: 'GET_ARTISTS',
    payload: request
  }
}

export function artistListAll () {
  const request = axios.get(`${URL}/artists?_limit=6`)
    .then(response => response.data)
  return {
    type: 'GET_ARTISTS_ALL',
    payload: request

  }
}

export function artistsDetail (id) {
  const request = axios.get(`${URL}/artists?id=${id}`)
    .then(response => response.data)

  return {
    type: 'GET_ARTISTS_DETAIL',
    payload: request
  }
}

export function clearArtistsDetail () {
  return {
    type: 'CLEAR_ARTIST_DETAIL',
    payload: null
  }
}
