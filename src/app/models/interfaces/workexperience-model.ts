export interface WorkExperience {
  id: number;
  role: string;
  company: string;
  startDate: Date;
  endDate?: Date | null;
  description: string;
}
