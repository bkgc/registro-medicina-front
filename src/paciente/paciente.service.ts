import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HistoriaPaciente, Paciente } from './Schema/paciente-schema';
import { Model } from 'mongoose';
import { CreatePacienteDto } from './Dto/create-paciente.dto';
import { UpdatePacienteDto } from './Dto/update-paciente.dto';
import { CreatePacienteHistoryDto } from './Dto/create-history-paciente.dto';

@Injectable()
export class PacienteService {

    constructor(@InjectModel(Paciente.name) private pacienteModel: Model<Paciente>) { }
    getAllPaciente() {
        return this.pacienteModel.find({ state: true }).exec();
    }
    getAllPacienteState() {
        return this.pacienteModel.find().exec();
    }
    GetOnePaciente(id: string) {
        return this.pacienteModel.findOne({ _id: id });
    }
    async createPaciente(createPaciente: CreatePacienteDto): Promise<Paciente> {
        const create = new this.pacienteModel(createPaciente)
        create.createAt = new Date()
        return create.save();
    }
    async createPacienteHistory(id: string, createHistory: CreatePacienteHistoryDto): Promise<Paciente> {
        const paciente = await this.pacienteModel.findOne({ _id: id })
        if (paciente) {
            paciente.historias.push(createHistory);
            await paciente.save();
            return paciente;
        }
        else {
            throw new Error('paciente no encontrado')
        }

    }
    async updatePaciente(id: string, updatePaciente: UpdatePacienteDto): Promise<Paciente> {
        const paciente = await this.pacienteModel.findOne({ _id: id })
        if (paciente) {
            console.log(paciente)
            paciente.set(updatePaciente)
            paciente.updateAt = new Date()
            return paciente.save();
        }
        else {
            throw new Error('paciente no encontrado')
        }

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
