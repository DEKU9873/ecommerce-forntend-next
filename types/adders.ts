export interface IAddress {
  _id: string;
  user: string;
  fullName: string;
  phoneNumber: string;
  city: string;
  address: string;
  postalCode: string;
  isDefault: boolean;
  createdAt?: string;  
  updatedAt?: string;   
}
