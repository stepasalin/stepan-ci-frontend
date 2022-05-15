import React, { useEffect, useState } from 'react'
import AutoTestItem from './components/autotest-item'
import { runsForAutoTest } from './logic/runs-for-tests' 
import { getAutoTests, getRuns } from './util/api'

const App: React.FC = () => {
  const [autoTests, setAutoTests] = useState<IAutoTest[]>([])
  const [runs, setRuns] = useState<IRun[]>([])
  const initDateTime = new Date()
  const [date, setDate] = useState(initDateTime)
  const tick = () => {
    setDate(new Date())
  }

  async function fetchAutoTests(): Promise<void> {
    const autoTests: IAutoTest[] = (await getAutoTests()).data.tests
    setAutoTests(autoTests)
  }

  async function fetchRuns(): Promise<void> {
    const runs: IRun[] = (await getRuns()).data.runs
    setRuns(runs)
  }


  useEffect(() => {
    fetchAutoTests()
    fetchRuns()
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
          runs={runsForAutoTest(runs,autoTest)}
        />
      ))}
    </main>
  )
}

export default App