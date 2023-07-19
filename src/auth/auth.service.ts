import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class AuthService {
  

  async validateUser(username: string, password: string): Promise<any> {
    if (username === 'templehs' && password === 'test') {
      return { userId: 1, username: 'Oluwasegun Are .J', jobtitle: 'Fullstack Developer'};
    }
    return null;
  }
}
