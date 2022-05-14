interface IAutoTest {
  _id: string;
  name: string;
  description: string;
  runCmd: string;
  agentGroup: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: IAutoTest
}

type ApiDataType = {
  message: string
  status: string
  autotests: IAutoTest[]
  autotest?: IAutoTest
}