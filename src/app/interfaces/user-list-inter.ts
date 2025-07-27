export interface User {
    id: number;
    sex: string;
    licenseSup: string;
    name: string;
    lastName: string;
    phone: string;
    taxpayer: string;
    email: string;
    password: string;
    role: string;
    status: string;
    dateBirth: string;
    
  }
  
  export interface UserListInter {
    statusCode: number;
    message: string;
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    users: User[];
  }
  