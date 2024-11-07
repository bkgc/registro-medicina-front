import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsNumber, isString, IsString } from 'class-validator'
export class CreatePacienteDto {
    @ApiProperty()
    @IsString()
    name: string
    @ApiProperty()
    @IsString()
    fatherLastName: string
    @ApiProperty()
    @IsString()
    motherLastName: string
    @ApiProperty()
    // @IsDate()
    bornDate: string
    @ApiProperty()
    @IsString()
    profession: string
    @ApiProperty()
    @IsString()
    address: string
    @ApiProperty()
    @IsString()
    municipio: string
    @ApiProperty()
    @IsString()
    ci: string
    @ApiProperty()
    @IsString()
    phone: string
    @ApiProperty()
    date: string
    @ApiProperty()
    createAt: string
    @ApiProperty()
    updateAt: string
    @ApiProperty({ default: true })
    @IsBoolean()
    state: boolean = true
}