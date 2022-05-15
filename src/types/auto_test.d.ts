interface IAutoTest {
  _id: string;
  name: string;
  description: string;
  runCmd: string;
  agentGroup: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AutoTestProps {
  autoTest: IAutoTest,
  tableau: ITableau
}

type ApiDataType = {
  message: string
  status: string
  tests: IAutoTest[]
  test?: IAutoTest
}