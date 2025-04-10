export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: number;
  endDate?: number | null;
  description: string;
  finalized: boolean;
}
