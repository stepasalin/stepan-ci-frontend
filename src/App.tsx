import React, { useEffect, useState } from 'react'
import AutoTestItem from './components/autotest-item'
import { getAutoTests } from './util/api'

const App: React.FC = () => {
  const [autoTests, setAutoTests] = useState<IAutoTest[]>([])

  async function fetchAutoTests(): Promise<void> {
    const apiResponse = await getAutoTests()
    console.log(apiResponse)
    const autoTests: IAutoTest[] = apiResponse.data.tests
    setAutoTests(autoTests)
  }
  // const fetchAutoTests = (): void => {
  //   response =
  //   // getAutoTests()
  //   // .then(({ data: { tests } }: IAutoTest[] | any) => setAutoTests(autoTests))
  //   // .catch((err: Error) => console.log(err))
  // }

  useEffect(() => {
    console.log('123')
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