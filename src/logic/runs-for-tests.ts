import { ITableau, ITableauItem } from "../types/tableau";

export function runsForAutoTest(runs: IRun[], autoTest: IAutoTest) {
  return(runs.filter( run => run.test == autoTest._id))
}

export function thisAutoTestRuns(tableau: ITableau, autoTest: IAutoTest) {
  const searchResult: any = tableau.tableauItems.find(
  (i) => {
    return(i.autoTestId === autoTest._id)
  }
  )
  if(searchResult){
    return(searchResult.runs)
  }
  return([])
}