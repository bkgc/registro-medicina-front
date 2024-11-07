import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './Dto/create-paciente.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('paciente')
export class PacienteController {
    constructor(
        private readonly pacienteService: PacienteService
    ) { }
    @Get()
    FindAll() {
        return this.pacienteService.getAllPaciente();
    }
    @Get(':id')
    @ApiParam({ name: 'id', required: true, description: 'Id del paciente' })
    FindOne(@Param('id') id: string) {
        return this.pacienteService.GetOnePaciente(id);
    }
    @Post()
    Create(@Body() createPaciente: CreatePacienteDto) {
        return this.pacienteService.createPaciente(createPaciente);
    }
    @Get('state/:id')
    @ApiParam({ name: 'id', required: true, description: 'Id del paciente' })
    UpdateState(@Param('id') id: string) {
        return this.pacienteService.changeState(id);
    }
}
