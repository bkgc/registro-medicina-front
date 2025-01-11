import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './Dto/create-paciente.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { UpdatePacienteDto } from './Dto/update-paciente.dto';
import { CreatePacienteHistoryDto } from './Dto/create-history-paciente.dto';

@Controller('paciente')
export class PacienteController {
    constructor(
        private readonly pacienteService: PacienteService
    ) { }
    @Get()
    FindAll() {
        return this.pacienteService.getAllPaciente();
    }
    @Get('all')
    FindAllPaciente() {
        return this.pacienteService.getAllPacienteState();
    }
    @Get(':id')
    @ApiParam({ name: 'id', required: true, description: 'Id del paciente' })
    FindOne(@Param('id') id: string) {
        return this.pacienteService.GetOnePaciente(id);
    }
    @UsePipes(ValidationPipe)
    @Post()
    Create(@Body() createPaciente: CreatePacienteDto) {
        return this.pacienteService.createPaciente(createPaciente);
    }
    @UsePipes(ValidationPipe)
    @Post('history:id')
    @ApiParam({ name: 'id', required: true, description: 'Id del paciente' })
    CreateHistory(@Param('id') id: string, @Body() createHistory: CreatePacienteHistoryDto) {
        return this.pacienteService.createPacienteHistory(id, createHistory);
    }
    @UsePipes(ValidationPipe)
    @Put(':id')
    @ApiParam({ name: 'id', required: true, description: 'Id del paciente' })
    Update(@Param('id') id: string, @Body() updatePaciente: UpdatePacienteDto) {
        console.log("Frontend " + updatePaciente)
        return this.pacienteService.updatePaciente(id, updatePaciente)
    }
    @Get('state/:id')
    @ApiParam({ name: 'id', required: true, description: 'Id del paciente' })
    UpdateState(@Param('id') id: string) {
        return this.pacienteService.changeState(id);
    }
}
