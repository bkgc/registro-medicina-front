import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Paciente extends Document {
    @Prop()
    name: string
    @Prop()
    fatherLastName: string
    @Prop()
    motherLastName: string
    @Prop()
    bornDate: string
    @Prop()
    profession: string
    @Prop()
    address: string
    @Prop()
    municipio: string
    @Prop()
    ci: string
    @Prop()
    phone: string
    @Prop()
    date: string
    @Prop()
    createAt: string
    @Prop()
    state: boolean
}
export const PacienteSchema = SchemaFactory.createForClass(Paciente);