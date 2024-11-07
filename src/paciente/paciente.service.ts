import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Paciente } from './Schema/paciente-schema';
import { Model } from 'mongoose';
import { CreatePacienteDto } from './Dto/create-paciente.dto';

@Injectable()
export class PacienteService {

    constructor(@InjectModel(Paciente.name) private pacienteModel: Model<Paciente>) { }
    getAllPaciente() {
        return this.pacienteModel.find({ state: true }).exec();
    }
    GetOnePaciente(id: string) {
        return this.pacienteModel.findOne({ _id: id });
    }
    createPaciente(createPaciente: CreatePacienteDto) {
        const create = new this.pacienteModel(createPaciente)
        return create.save();
    }
    async changeState(id: string): Promise<Paciente> {
        const paciente = await this.pacienteModel.findOne({ _id: id })
        if (paciente) {
            if (paciente.state) {
                paciente.state = false
            }
            else {
                paciente.state = true
            }
            return await paciente.save();
        }
        else {
            throw new Error('paciente no encontrado');
        }
    }
}
