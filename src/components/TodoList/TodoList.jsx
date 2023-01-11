import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = ({todos, changeStatusTodo, deleteTodo}) => {

    if(!todos.length) return <p>List is empty</p>

    return(
        <ul className="list-group">
            {/* создаем jsx-разметку из полей объекта newTodo (todos) (с помощью метода map) */}
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id} //!!!должен быть уникален и постоянен  (добавляется дополнительно при мапинге jsx-разметки)
                    id={todo.id}
                    title={todo.title}
                    index={index}
                    completed={todo.completed}
                    changeStatusTodo={changeStatusTodo}
                    deleteTodo={deleteTodo}

                />
            ))}
        </ul>
    )
}