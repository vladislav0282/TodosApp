/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { useState } from 'react'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'
import styles from './todoItem.module.css'
import { Modal } from '../Modal/Modal'

export function TodoItem({
  title,
  id,
  index,
  completed,
}) {
  const { changeStatusTodo } = useTodoListMethodsContext()

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const closeDeleteModalHandler = () => {
    setIsDeleteModalOpen(false)
  }

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true)
  }

  const completeHandler = () => {
    changeStatusTodo(id)
  }

  // const deleteHandler = () => {
  //   deleteTodo(id)
  // }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? styles.done : ''}>
        {index + 1}
        .
        {title}
      </span>
      <Modal isOpen={isDeleteModalOpen} closeHandler={closeDeleteModalHandler}>
        <p>Hello</p>
      </Modal>
      <div>
        <button
          onClick={completeHandler}
          type="button"
          className={classNames(
            'btn',
            'mx-2',
            { 'btn-primary': completed },
            { 'btn-success': !completed },
          )}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button
          onClick={openDeleteModalHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
