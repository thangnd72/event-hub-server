import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaBase } from '@src/commons/base/base.schema';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends SchemaBase {
  @Prop({ required: true })
  fullName: string;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  isActive?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
