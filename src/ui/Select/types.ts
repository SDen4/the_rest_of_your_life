export interface ISelect {
  onChange: (event: any) => void;
  list: string[];
  currentValue: string;
  title?: string;
}
