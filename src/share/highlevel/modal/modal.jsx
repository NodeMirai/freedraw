import React from 'react'
import { connect } from 'react-redux'

import * as modalAction from '../../../redux/action/modal'
import './modal.scss'

/**
 * 提供模态框通用功能
 * 1. 组件显示与关闭
 * 2. 头部与内容区
 * 3. props中用来保存传递样式值：small normal large 自定义
 */

//{ modelHead, modalBody }
export default function(modalOpt) {
  return (function () {
    class Modal extends React.Component {
      constructor(props) {
        super(props)
      }

      render() {
        let { isModalShow, modalToggle } = this.props
        if (isModalShow) {
          return (
            <div className="modal">
              <div className="modal__head">
                <strong className="modal__close" onClick={() => modalToggle(false)}></strong>
                <span className="modal__head__text">{modalOpt.headerText}</span>
              </div>
              <div className="modal__body">
                { modalOpt.modalBody }
              </div>
            </div>
          )
        } else {
          return null
        }
      }
    }
    let HighModal = connect(
      (state) => ({
        isModalShow: state.modal.isModalShow
      }),
      modalAction
    )(Modal)
    return HighModal
  })()
}

