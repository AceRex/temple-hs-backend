import { Controller, Get, Body, Post, Param} from '@nestjs/common';
import { AppService } from './app.service';
import { Doctor } from './app.schema';
import { CreateDoctorDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Doctor[]> {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() createDoctor: CreateDoctorDto): Promise<Doctor> {
    return this.appService.create(createDoctor);

  }

  @Get(':id')
  async findDoctor(
    @Param('id')
    id: string,
  ): Promise<Doctor> {
    return this.appService.findDoctor(id);
  }
}
