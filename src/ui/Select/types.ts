export interface ISelect {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  list: string[];
  currentValue: string;
  title?: string;
}
