import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose"

@Schema({
    timestamps: true
})
export class Address{
    @Prop({required: true})
    address: string;

    @Prop()
    city?: string;

    @Prop({required: true})
    country: string;

    @Prop()
    pinCode?: string
}

const schema = SchemaFactory.createForClass(Address);

export const AddressSchema = schema;