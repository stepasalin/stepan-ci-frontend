import axios, { AxiosResponse } from 'axios'
import { SERVER_HOST, SERVER_PORT } from '../config'

const baseUrl: string = `http://${SERVER_HOST}:${SERVER_PORT}`

async function getFromServer(endpoint: string): Promise<AxiosResponse> {
  const response: AxiosResponse = await axios.get(
    baseUrl + endpoint
  )
  return response
}

export async function getAutoTests(): Promise<AxiosResponse> {
  return(await getFromServer('/all-auto-tests'))
}

export async function getRuns(): Promise<AxiosResponse> {
  return(await getFromServer('/all-runs'))
}