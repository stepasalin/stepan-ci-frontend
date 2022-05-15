import { IRun } from './run';
export interface ITableauItem {
  autoTestId: string;
  runs: IRun[]
}

export interface ITableau {
  tableauItems: ITableauItem[]
}