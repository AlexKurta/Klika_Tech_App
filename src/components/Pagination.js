import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePage, nextPage } from '../ac'
import PropTypes from 'prop-types'

class Pagination extends Component {
  static propTypes = {
    // from connect
    changePage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    // from Playlist
    length: PropTypes.number,
    pageSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  getTotalPages = () => {
    const { length, pageSize } = this.props
    //расчет количества страниц
    return length ? Math.ceil(length / pageSize) : 0
  }

  getPaginationBody = () => {
    const { currentPage } = this.props
    const total = this.getTotalPages()
    // описываем поведение пагинатора, подсвечиваем текущее значение
    if (total === 0) return <li>{0}</li>

    let from, to
    if (currentPage < 4 && total < 6) {
      from = 1
      to = total
    }
    if (currentPage < 4 && total >= 6) {
      from = 1
      to = 5
    }
    if (+currentPage >= 4 && +currentPage <= total - 2) {
      from = +currentPage - 2
      to = +currentPage + 2
    }
    if (+currentPage >= 4 && +currentPage > total - 2) {
      from = total - 4
      to = total
    }

    const items = []
    for (let i = from; i <= to; i++) {
      items.push(
        <li
          key={i}
          data-value={i}
          onClick={this.handleClick}
          className={i === +currentPage ? 'pagination_current' : null}
        >
          <span>{i}</span>
        </li>
      )
    }
    return <React.Fragment>{items}</React.Fragment>
  }

  handleClick = ev => {
    const { changePage } = this.props
    //передаем в редьюсор выбранную страницу
    changePage(ev.currentTarget.getAttribute('data-value'))
  }

  handleChangePage = ev => {
    const { nextPage, currentPage } = this.props
    const total = this.getTotalPages()
    // передаем в редьюсор клик вперед/назад, игнорируем крайние значения
    const type = ev.currentTarget.getAttribute('data-type')
    if (
      (type === 'back' && currentPage > 1) ||
      (type === 'forward' && currentPage < total)
    )
      nextPage(type)
  }

  render() {
    return (
      <ul className="pagination">
        <li onClick={this.handleChangePage} data-type={'back'}>
          <i className="pagination_icon fas fa-angle-left" />
        </li>
        {this.getPaginationBody()}
        <li onClick={this.handleChangePage} data-type={'forward'}>
          <i className="pagination_icon fas fa-angle-right" />
        </li>
      </ul>
    )
  }
}

export default connect(
  null,
  { changePage, nextPage }
)(Pagination)
