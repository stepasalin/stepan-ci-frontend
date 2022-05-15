import React from "react"

const RunItem: React.FC<runProps> = ({ run }) => {
  return (
    <tr>
      <td>{run.createdAt}</td>
      <td>{run.executionStatus}</td>
      <td>{run.takenAt}</td>
      <td>{run.availability}</td>
    </tr>
  )
}

export default RunItem