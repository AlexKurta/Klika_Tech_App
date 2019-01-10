import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterPlaylist } from '../ac'
import PropTypes from 'prop-types'

class Select extends Component {
  static propTypes = {
    // from connect
    filterPlaylist: PropTypes.func.isRequired,
    // from Filter
    option: PropTypes.array,
    name: PropTypes.string,
  }

  getOptionsForSelect = () => {
    const { option } = this.props
    if (!option.length) return null
    return option.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))
  }

  handleChange = () => ev => {
    const { filterPlaylist } = this.props
    //передаем в редьюсор значение фильтра
    filterPlaylist(ev.target.name, ev.target.value)
  }

  render() {
    return (
      <React.Fragment>
        <select name={this.props.name} onChange={this.handleChange()}>
          <option value={''} defaultValue>
            {'Все'}
          </option>
          {this.getOptionsForSelect()}
        </select>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { filterPlaylist }
)(Select)
