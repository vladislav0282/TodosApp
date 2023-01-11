import { Form } from './components/Form/Form'

import headerStyle from './header.module.css'

export const Header = ({addNewTodo}) =>{
    return (
        <header className={headerStyle.wr}>
        <Form addNewTodo={addNewTodo}/>
        </header>
    )
}