interface IRun {
  _id: string;
  agent: string;
  executionStatus: string;
  availability: string;
  test: string;
  logPath: string;
  takenAt: string;
  finishedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

interface runProps {
  run: IRun;
}