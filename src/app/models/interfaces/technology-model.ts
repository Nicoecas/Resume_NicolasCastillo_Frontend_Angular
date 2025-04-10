export interface Technology {
  id: number;
  technologyName: number;
  description: string;
  typeName: string;
}

export interface GroupedTechnology {
  typeName: string;
  technologies: Technology[];
}
