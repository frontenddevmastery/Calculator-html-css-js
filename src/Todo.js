import iconCross from './images/icon-cross.svg'

export const Todo = ({todos, todo, setTodos, index}) => {
    return(
        <div className="todo" key={todo.id}>
            <input className='checkbox' type="checkbox" id={todo.id} onClick={(e) => {
                if (e.target.checked) {
                    const copy = [...todos]
                    copy[index].isCompleted = true
                    setTodos(copy)
                } else {
                    const copy = [...todos]
                    copy[index].isCompleted = false
                    setTodos(copy)
                }
            }} defaultChecked={todo.isCompleted ? 'checked': false}/>
            <span className={`todo-text${todo.isCompleted ? ' strike-through': ''}`}>{ todo.text }</span>
            <img src={iconCross} alt="cancel todo" onClick={e => {
                setTodos(prev => prev.filter(todo => {
                    return todo.id != e.target.parentNode.querySelector('.checkbox').id
                }))
            }}/>
        </div>
    )
}