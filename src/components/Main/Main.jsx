import mainStyle from './main.module.css'

import { TodoList } from '../TodoList/TodoList'



export const Main = ({todos, changeStatusTodo, deleteTodo})=>{
    return(
        <main className={mainStyle.wr}>
        <TodoList 
        todos={todos} 
        changeStatusTodo={changeStatusTodo}
        deleteTodo={deleteTodo}
        />
        </main>
    )
}