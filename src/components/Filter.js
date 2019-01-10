import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Select from './Select'
import { getOptions, getFilteredPlaylist } from '../helpers'

class Filter extends Component {
  static propTypes = {
    // from connect
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
  }

  render() {
    const { playlist } = this.props
    //оставляем уникальные значения для полей фильтра
    //getOptions() - из helpers.js
    const performer = getOptions(playlist, 'performer')
    const genre = getOptions(playlist, 'genre')
    const year = getOptions(playlist, 'year')

    return (
      <div className="filter">
        <h3>Фильтр</h3>
        <div className="filter_body">
          <p>Исполнитель</p>
          <Select option={performer} name={'performer'} />
          <p>Жанр</p>
          <Select option={genre} name={'genre'} />
          <p>Год</p>
          <Select option={year} name={'year'} />
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    //забираем из стора отфильтрованный ранее плейлист, чтобы убрать лишние значения
    //getFilteredPlaylist() - из helpers.js
    playlist: getFilteredPlaylist(state.playlist.playlist, state.filter),
  }
})(Filter)
