import './style.css'
import bgDesktopDark from './images/bg-desktop-dark.jpg'
import bgDesktopLight from './images/bg-desktop-light.jpg'
import bgMobileDark from './images/bg-mobile-dark.jpg'
import bgMobileLight from './images/bg-mobile-light.jpg'
import iconCheck from './images/icon-check.svg'
import iconMoon from './images/icon-moon.svg'
import iconSun from './images/icon-sun.svg'
import { useState, useRef } from 'react';
import { Todo } from './Todo'


export const App = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [tab, setTab] = useState('all')
    const [theme, setTheme] = useState('light')

    const handleCurrentTab = (e) => {
        e.target.parentNode.querySelectorAll('span[data-currenttab]').forEach(elem => {
            elem.dataset.currenttab = false
        })
        e.target.dataset.currenttab = true
    }

    const handleClearCompleted = () => {
        setTodos(prev => prev.filter(todo => {
            return todo.isCompleted == false
        }))
    }

    return (
       <main className="app">
            <header>
                <article className="header-info">
                    <h1 className="app-title">TODO</h1>
                    <span>
                        {theme === 'light' && (
                            <img src={iconSun} alt="theme toggle button" onClick={() => setTheme('dark')}></img>
                        )}
                        {theme === 'dark' && (
                            <img src={iconMoon} alt="theme toggle button" onClick={() => setTheme('light')}></img>
                        )}
                    </span>
                </article>
                <span className="invisible">Lorem</span>
            </header>
    
            <article className="todos-all-info-wrapper">
                <section className="create-todo-wrapper section">
                    <span className="todo-img"></span>
                    <input type="text" placeholder="Create new todo" value={inputText} onChange={e => { setInputText(e.target.value);}}
                        onKeyDown={e => {
                            if (e.key === 'Enter' && inputText !== '') {
                                const objTodo = { text:inputText, isCompleted:false, id:Math.random() }
                                setTodos(prev => {
                                    return inputText && [objTodo, ...prev]
                                    
                                })
                                setInputText('')
                            }
                        }}
                    />
                </section>

                <section className="todos-wrapper section">
                    <article className="all-todos">
                        {tab === 'all' && todos.map((todo, index) => 
                            <Todo todos={todos} todo={todo} setTodos={setTodos} index={index} />
                        )}

                        {tab === 'active' && todos.filter(todo => todo.isCompleted == false).map((todo, index) => 
                            <Todo todos={todos} todo={todo} setTodos={setTodos} index={index} />
                        )}

                        {tab === 'completed' && todos.filter(todo => todo.isCompleted == true).map((todo, index) => 
                            <Todo todos={todos} todo={todo} setTodos={setTodos} index={index} />
                        )}

                        <div className="todo-info">
                            <span className="todos-left"><span className="todos-left-no">{ todos.length }</span> items left</span>
                            <div className="todo-state-desktop">
                                <span data-currenttab="true" onClick={(e) => {setTab('all'); handleCurrentTab(e)}}>All</span>
                                <span data-currenttab="false" onClick={(e) => {setTab('active'); handleCurrentTab(e)}}>Active</span>
                                <span data-currenttab="false" onClick={(e) => {setTab('completed'); handleCurrentTab(e)}}>Completed</span>
                            </div>
                            <span className="clear-completed" onClick={handleClearCompleted}>Clear completed</span>
                        </div>
                    </article>
                    
                    <article className="todo-state-mobile">
                        <span data-currenttab="true" onClick={(e) => {setTab('all'); handleCurrentTab(e)}}>All</span>
                        <span data-currenttab="false" onClick={(e) => {setTab('active'); handleCurrentTab(e)}}>Active</span>
                        <span data-currenttab="false" onClick={(e) => {setTab('completed'); handleCurrentTab(e)}}>Completed</span>
                    </article>
                </section>
            </article>

            <aside className="todo-drag-info section">
                <span>Drag and drop to reorder list</span>
            </aside>
        </main>
    )
};
