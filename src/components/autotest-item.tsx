import { table } from 'console'
import React, { useEffect, useState } from 'react'
import { thisAutoTestRuns } from '../logic/runs-for-tests'
import RunItem from './run-item'

const AutoTestItem: React.FC<AutoTestProps> = ({ autoTest, tableau }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{autoTest.name}</h1>
        <p>{autoTest.description}</p>
        <br />
        <table>
          <thead>
            <tr>
              <td>CREATED AT</td>
              <td>STATUS</td>
              <td>TAKEN AT</td>
              <td>AVAILABILITY</td>
            </tr>
          </thead>
          <tbody>
            {thisAutoTestRuns(tableau, autoTest).map((run: IRun) => (
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

