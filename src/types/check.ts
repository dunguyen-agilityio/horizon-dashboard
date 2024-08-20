export interface Check {
  name: string;
  progress: number; // Unit is %
  quantity: number;
  createdAt: Date;
  id: string;
}
