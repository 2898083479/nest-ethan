import { Cat } from './model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'cat', timestamps: true })
export class CatModel extends Document implements Cat {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  brand: string;

  @Prop({
    required: true,
    type: Object,
  })
  owner: {
    name: string;
    phone: string;
  };
}

export const CatSchema = SchemaFactory.createForClass(CatModel);
