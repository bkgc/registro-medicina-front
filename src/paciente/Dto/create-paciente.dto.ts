import { Prop } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsNumber, isString, IsString, minLength, MinLength } from 'class-validator'
import { Date } from 'mongoose'
export class CreatePacienteDto {
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(3)
    name: string
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(3)
    fatherLastName: string
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(3)
    motherLastName: string
    @ApiProperty()
    bornDate: string
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(3)
    profession: string
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(3)
    address: string
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(3)
    municipio: string
    @ApiProperty()
    ci: string
    @ApiProperty()
    phone: string
    @ApiProperty()
    date: string
    createAt: Date
    state: boolean = true
}