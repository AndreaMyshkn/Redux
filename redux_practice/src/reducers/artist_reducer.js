// Reducer que recibe el estado inicial, una acción, y que retorna un nuevo estado.
export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_ARTISTS':
      return { ...state, artistList: action.payload }
    case 'GET_ARTISTS_ALL':
      return { ...state, artistList: action.payload }
    case 'GET_ARTISTS_DETAIL':
      return { ...state, artistData: action.payload }
    case 'CLEAR_ARTIST_DETAIL':
      return { ...state, artistData: action.payload }
      //si no existe action.type o no concuerda con ningún caso definido
    // se devuelve el estado sin modificar
    default:
      return state
  }
}
