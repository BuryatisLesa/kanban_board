 export type TypeTask = {
    id: string;
    name:string;
    description: string;
    stage: string;
}


export type Issue = {
  id: string;
  name: string;
  description: string;
};


export type StageType = {
  title: string;
  issues: Issue[];
};
