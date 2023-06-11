import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose"
import { Address, AddressSchema } from "./common/address.shcema";
import { Document } from "mongoose";
import { type } from "os";


@Schema({
    timestamps: true
})
export class User{
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({select: false})
    password: string;

    @Prop()
    dob?: string

    @Prop()
    phone?: string

    @Prop({type: AddressSchema})
    address: Address
}

const schema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;

export const UserSchema = schema;