import { Injectable } from '@nestjs/common';
import { Doctor } from './app.schema';
import { CreateDoctorDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>,
  ) {}

  async findAll(): Promise<Doctor[]> {
    return await this.doctorModel.find();
  }

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const newUser = new this.doctorModel(createDoctorDto);
    return await newUser.save();
  }

  async findDoctor(id: string): Promise<Doctor> {
    const res = await this.doctorModel.findById(id);
    return res;
  }

}
