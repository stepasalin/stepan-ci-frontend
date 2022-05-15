import React, { useEffect, useState } from 'react'
import RunItem from './run-item'

const AutoTestItem: React.FC<AutoTestProps> = ({ autoTest, runs }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{autoTest.name}</h1>
        <p>{autoTest.description}</p>
        <br />
        <table>
          <tbody>
            {runs.map((run: IRun) => (
            <RunItem
              key={run._id}
              run={run}
            />
            ))}
          </tbody>  
        </table>
      </div>
    </div>
  )
}

export default AutoTestItem

