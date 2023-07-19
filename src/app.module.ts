import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from './app.schema';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://johnsonare2207:FQ8IiwiTRncS3cfw@cluster0.foii2u6.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
