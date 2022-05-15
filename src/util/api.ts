import axios, { AxiosResponse } from 'axios'
import { SERVER_HOST, SERVER_PORT } from '../config'

const baseUrl: string = `http://${SERVER_HOST}:${SERVER_PORT}`

export async function getAutoTests(): Promise<AxiosResponse> {
  const response: AxiosResponse = await axios.get(
      baseUrl + '/all-auto-tests'
    )
  return response
}

// export const getAutoTests = async (): Promise<Object> => {
//   try {
//     const response: AxiosResponse = await axios.get(
//       baseUrl + '/all-auto-tests'
//     )
//     console.log(response)
//     return response.data
//   } catch (error) {
//     throw new Error(error)
//   }
// }