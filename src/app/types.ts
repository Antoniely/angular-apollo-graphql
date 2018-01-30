export type Course = {
  id: number;
  tittle: string;
  author: string;
  description: string;
  topic: string;
  url: string;
};

export type Query = {
  allCourses: Course[];
};
