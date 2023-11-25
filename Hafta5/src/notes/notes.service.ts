import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INotes } from './notes.model';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel('Notes') private readonly notesModel: Model<INotes>,
  ) {}

  async getNotes() {
    const notes = await this.notesModel.find();

    return notes;
  }

  async getNote(id: string) {
    const note = await this.notesModel.findById(id);

    return note;
  }

  async insertNote(payload: CreateNoteDto) {
    const createdNote = new this.notesModel(payload);
    const res = await createdNote.save();

    return res.id;
  }

  async updateNote(id: string, payload: UpdateNoteDto) {
    const updatedNote = await this.notesModel.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (!updatedNote) throw new NotFoundException('Note not found');

    return updatedNote;
  }

  async deleteNote(id: string) {
    const deletedNote = await this.notesModel.findByIdAndDelete(id);

    return deletedNote;
  }
}
