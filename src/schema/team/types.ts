import { Team } from "./model";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'team', timestamps: true })
export class TeamModel extends Document implements Team {
    @Prop({
        required: true,
        unique: true,
        set: (val: string) => {
            return val.toLowerCase();
        }
    })
    email: string;

    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        type: Object,
        default: {
            name: "",
            phone: ""
        },
        required: true
    })
    owner: {
        name: string;
        phone: string;
    }
};

export const TeamSchema = SchemaFactory.createForClass(TeamModel);

