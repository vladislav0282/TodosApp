/* eslint-disable linebreak-style */
/* eslint-disable react/function-component-definition */
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

export const Modal = ({ isOpen, closeHandler, children }) => {
  console.log({ isOpen, closeHandler })

  if (!isOpen) return null

  return createPortal(
    <div className={styles.modalWr}>
      {children}
    </div>,
    document.getElementById('modal-root'),
  )
}
