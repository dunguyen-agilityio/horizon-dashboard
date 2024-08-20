export const enum ComplexStatus {
  APPROVED = 'Approved',
  DISABLE = 'Disable',
  ERROR = 'Error',
}

export interface Complex {
  id: string;
  name: string;
  progress: number; // Unit is %
  status: ComplexStatus;
  createdAt: Date;
}
