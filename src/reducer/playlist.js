import { LOAD_PLAYLIST, START, SUCCESS } from '../constants'

const defaultplaylistState = {
  loading: false,
  loaded: false,
  playlist: [],
}

export default (playlistState = defaultplaylistState, action) => {
  const { type, response } = action
  switch (type) {
    //загрузка плейлиста началась
    case LOAD_PLAYLIST + START:
      return { ...playlistState, loading: true, loaded: false }

    //плейлист загружен
    case LOAD_PLAYLIST + SUCCESS:
      return {
        ...playlistState,
        playlist: response,
        loading: false,
        loaded: true,
      }

    default:
      return playlistState
  }
}
