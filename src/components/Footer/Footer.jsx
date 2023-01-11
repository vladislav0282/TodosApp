import footerStyle from './footer.module.css'

export const Footer = ({ clearAllTodos, id, todos, title }) => { const clearHandler = () => {
clearAllTodos(id)
    }

    return (
        <footer className="d-flex justify-content-center">
            <div>
                <button onClick={clearHandler} type="button" 
                className={!todos.length ? "btn btn-dark mx-2" : "btn btn-warning mx-2"}>{!todos.length ? "Cleared" : "Clear All"}
                </button>
            </div>
        </footer>
    )
}