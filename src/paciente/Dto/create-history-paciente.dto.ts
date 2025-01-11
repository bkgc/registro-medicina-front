import { Prop } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsNumber, isString, IsString, minLength, MinLength } from 'class-validator'
export class CreatePacienteHistoryDto {
    @ApiProperty()
    fecha: Date
    @ApiProperty()
    @IsString()
    hora: string
    @ApiProperty()
    edad: number
    @ApiProperty()
    @IsString()
    peso: string
    @ApiProperty()
    @IsString()
    talla: string
    @ApiProperty()
    @IsString()
    imc: string
    @ApiProperty()
    @IsString()
    pa: string
    @ApiProperty()
    @IsString()
    fc: string
    @ApiProperty()
    @IsString()
    fr: string
    @ApiProperty()
    @IsString()
    temp: string
    @ApiProperty()
    @IsString()
    spo2: string
    @ApiProperty()
    @IsString()
    subjetivo: string
    @ApiProperty()
    @IsString()
    objetivo: string
    @ApiProperty()
    @IsString()
    analisis: string
    @ApiProperty()
    @IsString()
    planAccion: string
    @ApiProperty()
    @IsString()
    firmaSello: string
}