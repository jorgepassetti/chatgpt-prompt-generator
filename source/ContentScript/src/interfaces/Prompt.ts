export interface Variable {
  key: string;
  value: string;
}
export default interface Prompt {
  title: string;
  prompt: string;
  variables?: Variable[];
}

export enum Languages {
  SPANISH = 'spanish',
  ENGLISH = 'english',
}

export type Language = 'spanish' | 'english';
