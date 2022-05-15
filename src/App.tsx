import React, { useEffect, useState } from 'react'
import AutoTestItem from './components/autotest-item'
import { getAutoTests } from './util/api'

const App: React.FC = () => {
  const [autoTests, setAutoTests] = useState<IAutoTest[]>([])

  async function fetchAutoTests(): Promise<void> {
    const autoTests: IAutoTest[] = (await getAutoTests()).data.tests
    setAutoTests(autoTests)
  }


  useEffect(() => {
    fetchAutoTests()
  }, [])


  return (
    <main className='App'>
      <h1>Auto Tests</h1>
      {autoTests.map((autoTest: IAutoTest) => (
        <AutoTestItem
          key={autoTest._id}
          autoTest={autoTest}
        />
      ))}
    </main>
  )
}

export default App