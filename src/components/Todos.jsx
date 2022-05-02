import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

export const Todos = () => {

  // load todos form GLOBAL context (so it does not get reset on route changes...)
  const { todos } = useContext(DataContext)

  const handleAdd = () => {
    const titleNew = prompt("Title pleeeze")
    if (titleNew) todos.add({ title: titleNew })
  }

  const handleUpdate = (item) => {
    const titleNew = prompt("Title pleeeze", item.title)
    const updatedItem = { ...item, title: titleNew }
    if (titleNew) todos.update(updatedItem)
  }

  return (
    <div className="todos">
      <h2>Todos</h2>
      {todos.state.map((todo) => (
        <div key={todo._id}>
          <span onDoubleClick={() => handleUpdate(todo)}>{todo.title}</span>
          <button onClick={() => todos.delete(todo._id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}
