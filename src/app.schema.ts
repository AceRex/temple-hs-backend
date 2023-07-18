import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Doctor extends Document {
  @Prop()
  image: string;

  @Prop()
  fullname: string;

  @Prop()
  jobtitle: string;

  @Prop()
  about: string;

  @Prop()
  meetingtype: string;

  @Prop(
    raw({
      Date: { type: Date, },
      // time: { type: timeStamp },
    }),
  )
  availableSchedule: Record<string, any>;

}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
