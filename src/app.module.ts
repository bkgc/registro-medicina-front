import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteModule } from './paciente/paciente.module';
@Module({
  imports: [PacienteModule,
    MongooseModule.forRoot('mongodb://localhost/registro'),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }