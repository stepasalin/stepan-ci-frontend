export function runsForAutoTest(runs: IRun[], autoTest: IAutoTest) {
  return(runs.filter( run => run.test == autoTest._id))
}