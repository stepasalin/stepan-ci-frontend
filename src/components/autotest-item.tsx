import React from "react"

// type Props = TodoProps & {
//   updateTodo: (todo: ITodo) => void
//   deleteTodo: (_id: string) => void
// }

const AutoTestItem: React.FC<AutoTestProps> = ({ autoTest }) => {
  const checkTodo: string = 'line-through'
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{autoTest.name}</h1>
        <span className={checkTodo}>{autoTest.description}</span>
        <span className={checkTodo}>{autoTest.runCmd}</span>
      </div>
    </div>
  )
}

export default AutoTestItem