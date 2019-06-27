// Este archivo contendrá todos los reducers.
// Recibe un objeto con los reducers que definimos y los combina.
import { combineReducers } from 'redux'
import artists from './artist_reducer'

const rootReducer = combineReducers({
  artists
})
export default rootReducer
