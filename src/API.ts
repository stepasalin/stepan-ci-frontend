import axios, { AxiosResponse } from "axios"
import { SERVER_HOST, SERVER_PORT } from "./config"

const baseUrl: string = `http://${SERVER_HOST}:${SERVER_PORT}`

export const getAutoTests = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const autoTests: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/all-auto-tests"
    )
    return autoTests
  } catch (error) {
    throw new Error(error)
  }
}

export const addAutoTest = async (
  formData: IAutoTest
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const autoTest: Omit<IAutoTest, "_id"> = {
      name: formData.name,
      description: formData.description,
      runCmd: formData.runCmd,
      agentGroup: formData.agentGroup
    }
    const saveAutoTest: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-auto-test",
      autoTest
    )
    return saveAutoTest
  } catch (error) {
    throw new Error(error)
  }
}