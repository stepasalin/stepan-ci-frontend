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
  runs: IRun[]
}

type ApiDataType = {
  message: string
  status: string
  tests: IAutoTest[]
  test?: IAutoTest
}