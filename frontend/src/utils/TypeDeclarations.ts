export interface ItemType {
  id: number;
  name: string;
  owner: string;
  origin: string;
  remarks: string;
  status: string; 
  location: string;
  timestamp: string;
}

export interface AuditType {
  remarks: string;
  user: string;
  timestamp: string;
}
