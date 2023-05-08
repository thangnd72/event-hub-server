import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export abstract class SchemaBase {
  @Prop()
  _id: mongoose.Types.ObjectId;

  @Prop()
  createdAt: Date;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedAt?: Date;

  @Prop()
  updatedBy?: string;

  @Prop()
  deleted?: boolean;
}
