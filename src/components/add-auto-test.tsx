import React from "react"

const autoTest: React.FC<AutoTestProps> = ({ autoTest }) => {
  const checkTodo: string = `line-through`
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className='line-through'>{autoTest.name}</h1>
        <span className={checkTodo}>{autoTest.description}</span>
      </div>
    </div>
  )
}

export default autoTest