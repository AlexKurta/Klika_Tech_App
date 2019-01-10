import React, { Component } from 'react'
import { changePageSize } from '../ac'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class PageSize extends Component {
  static propTypes = {
    // from connect
    changePageSize: PropTypes.func.isRequired,
    // from Playlist
    pageSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  handleClick = ev => {
    const { changePageSize } = this.props
    //передаем в редьюсор значение размера страницы: 5/10/25/50/100
    changePageSize(ev.target.getAttribute('data-size'))
  }

  getClassName = value => {
    const { pageSize } = this.props
    //подсвечиваем выбранное значение
    return pageSize === value ? 'pagesize_current' : null
  }

  render() {
    return (
      <table className="pagesize" border="1">
        <tbody>
          <tr onClick={this.handleClick}>
            <td key={1} data-size={5} className={this.getClassName('5')}>
              {'5'}
            </td>
            <td key={2} data-size={10} className={this.getClassName('10')}>
              {'10'}
            </td>
            <td key={3} data-size={25} className={this.getClassName('25')}>
              {'25'}
            </td>
            <td key={4} data-size={50} className={this.getClassName('50')}>
              {'50'}
            </td>
            <td key={5} data-size={100} className={this.getClassName('100')}>
              {'100'}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default connect(
  null,
  { changePageSize }
)(PageSize)
