import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    const { username, password } = loginDto;
    const user = await this.authService.validateUser(username, password);
    
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    
    // Perform additional actions such as generating a token, setting cookies, etc.
    
    return { message: 'Login successful', user };
  }
}
