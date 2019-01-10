import React, { Component } from 'react'
import { sortPlaylist } from '../ac'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    // from connect
    sortPlaylist: PropTypes.func.isRequired,
    //from Playlist
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }

  handleClick = ev => {
    const { sortPlaylist } = this.props
    //передаем в редьюсор имя колонки для сортировки
    sortPlaylist(ev.currentTarget.getAttribute('data-column'))
  }

  render() {
    const { title, name, order } = this.props
    return (
      <React.Fragment>
        <td
          onClick={this.handleClick}
          data-column={name}
          className="playlist_table_header"
        >
          <span>{title}</span>
          {!order ? null : <i className={`sort_icon fas fa-${order}`} />}
        </td>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { sortPlaylist }
)(Header)
