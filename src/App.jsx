import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleTodo } from './redux/todoSlice'

function App() {

  const [inputValue, setInputValue] = useState('')

  //This line retrieves the entire todoReducer slice and then destructures todos from it.
  const { todos } = useSelector(state => state.todoReducer)

  // This line directly accesses the todos array from the todoReducer slice without the need for destructuring.
  // const todos = useSelector(state => state.todoReducer.todos)


  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  }

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };


  return (
    <>
      <div style={{ backgroundImage: 'linear-gradient(to right, rgb(0, 149, 167), rgb(135, 12, 165))', height: '100vh' }}>
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="text-center text-light mt-5"><i className="fa-solid fa-list-check me-3" style={{ color: 'white' }}></i>TODO LIST</h1>
              <div className="bg-light p-3 rounded shadow mt-4 border">

                {/* input-box */}
                <form>
                  <div className="d-flex">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" value={inputValue} placeholder="Enter the Activity" className="form-control" />
                    <button onClick={handleAddTodo} type="button" className="btn btn-primary ms-2"><i className="fa-solid fa-plus fa-lg"></i></button>
                  </div>
                </form>
              </div>


              {/* task card */}
              <div className="bg-light p-3 rounded shadow mt-4 border">
                {todos.length === 0 ?
                  (
                    <h6 className="text-center text-muted">No tasks for you now.</h6>
                  )
                  :
                  (
                    todos.map((todo, id) => (
                      <div key={id} className='d-flex align-items-center'>
                        <h6>{id + 1}.</h6>
                        <h6 className='ms-3'>{todo.text}</h6>


                        {/* Toggle button based on completion state */}
                        <button
                          className='btn ms-auto fs-4'
                          onClick={() => handleToggleTodo(id)}>
                          {todo.completed ?
                            (
                              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
                            )
                            :
                            (
                              <i className="fa-regular fa-circle-check" style={{ color: 'green' }}></i>
                            )
                          }
                        </button>

                        {/* button to delete todo */}
                        <button onClick={() => handleDeleteTodo(id)} className='btn ms-1 fs-4'><i className="fa-solid fa-square-xmark" style={{ color: 'red' }}></i></button>
                      </div>
                    )))}
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  )
}

export default App



