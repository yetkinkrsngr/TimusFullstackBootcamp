import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';

const uri = ''; // env

@Module({
  imports: [MongooseModule.forRoot(uri), NotesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
