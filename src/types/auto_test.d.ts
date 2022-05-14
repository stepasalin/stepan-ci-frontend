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
  autoTest: IAutoTest
}

type ApiDataType = {
  message: string
  status: string
  autotests: IAutoTest[]
  autotest?: IAutoTest
}