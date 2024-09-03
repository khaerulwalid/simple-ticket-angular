export interface UserCredentials {
    email: string;
    password: string;
  }

  export interface UserRegistration {
    name: string;
    email: string;
    username: string;
    password: string;
  }

  export interface LoginResponse {
    access_token: string
  }

  export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface RecipientDonor {
    id: number;
    UserId: number;
    stock: number;
    location: string;
    image: string | null;
    latitude: string;
    longitude: string;
    bloodType: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    User: User;
  }

  export interface Donor {
    id: number;
    UserId: number;
    RecipientId: number;
    createdAt: string;
    updatedAt: string;
    Recipient: RecipientDonor;
    DonorConfirmation: any | null;
  }
  
  export interface DonorRecipient {
    id: number;
    UserId: number;
    RecipientId: number;
    createdAt: string;
    updatedAt: string;
    DonorConfirmation: any;
  }
  
  export interface Recipient {
    id: number;
    UserId: number;
    stock: number;
    location: string;
    image: string | null;
    latitude: string;
    longitude: string;
    bloodType: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    User: User;
    Donors: DonorRecipient[];
  }
  