import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PlaylistPage extends Component {
  static propTypes = {
    //from Playlist
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

    pageSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  render() {
    const { playlist, pageSize, currentPage } = this.props
    if (!playlist.length) return null
    //из массива плейлиста берем елементы для текущей страницы
    const renderPlaylist = playlist.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    )

    return (
      <tbody>
        {renderPlaylist.map(item => (
          <tr key={item.id}>
            <td key={1}>{item.performer}</td>
            <td key={2}>{item.song}</td>
            <td key={3}>{item.genre}</td>
            <td key={4}>{item.year}</td>
          </tr>
        ))}
      </tbody>
    )
  }
}

export default PlaylistPage
