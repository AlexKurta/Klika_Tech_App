import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadPlaylist } from '../ac'
import { getFilteredPlaylist, getSortedPlaylist } from '../helpers'
import Header from './Header'
import PageSize from './PageSize'
import PlaylistPage from './PlaylistPage'
import Pagination from './Pagination'

class Playlist extends Component {
  static propTypes = {
    // from connect
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,

    playlist: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        performer: PropTypes.string.isRequired,
        song: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),

    filter: PropTypes.shape({
      performer: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),

    sort: PropTypes.shape({
      performer: PropTypes.string.isRequired,
      song: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired,

    pageSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    loadPlaylist: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { loaded, loading, loadPlaylist } = this.props
    //загружаем плейлист
    if (!loaded && !loading) loadPlaylist()
  }

  render() {
    const { sort, playlist, pageSize, currentPage } = this.props
    return (
      <div>
        <h3>Плейлист</h3>
        <table className="playlist_table">
          <thead className="playlist_table_thead">
            <tr>
              <Header
                title={'Исполнитель'}
                name={'performer'}
                order={sort.performer}
              />
              <Header title={'Песня'} name={'song'} order={sort.song} />
              <Header title={'Жанр'} name={'genre'} order={sort.genre} />
              <Header title={'Год'} name={'year'} order={sort.year} />
            </tr>
          </thead>
          <PlaylistPage
            playlist={playlist}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </table>
        <PageSize pageSize={pageSize} />
        <Pagination
          length={playlist.length}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      loading: state.playlist.loading,
      loaded: state.playlist.loaded,
      //getSortedPlaylist() и getFilteredPlaylist() - из helpers.js
      playlist: getSortedPlaylist(
        getFilteredPlaylist(state.playlist.playlist, state.filter),
        state.sort
      ),
      sort: state.sort,
      pageSize: state.pageSize,
      currentPage: state.currentPage,
    }
  },
  { loadPlaylist }
)(Playlist)
