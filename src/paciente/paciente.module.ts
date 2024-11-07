import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Paciente, PacienteSchema } from './Schema/paciente-schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Paciente.name, schema: PacienteSchema }])],
  controllers: [PacienteController],
  providers: [PacienteService]
})
export class PacienteModule { }
