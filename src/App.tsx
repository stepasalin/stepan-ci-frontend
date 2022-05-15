import React, { useEffect, useState } from 'react'
import AutoTestItem from './components/autotest-item'
import { ITableau } from './types/tableau'
import { getAutoTests, getTableau } from './util/api'

const initialTableau = {
  tableauItems: [{autoTestId: 'i dont exist', runs: []}]
}

const App: React.FC = () => {
  const [autoTests, setAutoTests] = useState<IAutoTest[]>([])
  const [tableau, setTableau] = useState<ITableau>(initialTableau)
  const initDateTime = new Date()
  const [date, setDate] = useState(initDateTime)
  const tick = () => {
    setDate(new Date())
  }

  async function fetchAutoTests(): Promise<void> {
    const autoTests: IAutoTest[] = (await getAutoTests()).data.tests
    setAutoTests(autoTests)
  }


  async function fetchTableau(): Promise<void> {
    const tableau: ITableau = (await getTableau()).data
    setTableau(tableau)
  }

  useEffect(() => {
    fetchTableau()
    fetchAutoTests()
    const timerID = setTimeout(() => tick(), 5000)
    return () => {
      clearTimeout(timerID)
    }
  }, [date])


  return (
    <main className='App'>
      <h1>Stepan CI</h1>
      {autoTests.map((autoTest: IAutoTest) => (
        <AutoTestItem
          key={autoTest._id}
          autoTest={autoTest}
          tableau={tableau}
        />
      ))}
    </main>
  )
}

export default App