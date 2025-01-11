import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { MinLength } from "class-validator";
import { Document } from "mongoose";

export class HistoriaPaciente {
    @Prop()
    fecha: Date
    @Prop()
    hora: string
    @Prop()
    edad: number
    @Prop()
    peso: string
    @Prop()
    talla: string
    @Prop()
    imc: string
    @Prop()
    pa: string
    @Prop()
    fc: string
    @Prop()
    fr: string
    @Prop()
    temp: string
    @Prop()
    spo2: string
    @Prop()
    subjetivo: string
    @Prop()
    objetivo: string
    @Prop()
    analisis: string
    @Prop()
    planAccion: string
    @Prop()
    firmaSello: string
}
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
    createAt: Date
    @Prop()
    updateAt: Date
    @Prop({ default: true })
    state: boolean
    @Prop()
    historias: Array<HistoriaPaciente>
}
export const PacienteSchema = SchemaFactory.createForClass(Paciente);