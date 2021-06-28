import { Component } from '@angular/core';
import { MyNote } from './shared/Interfaces/note.interface';
import { HttpNoteService } from './shared/services/http-note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project14';

  noteList!: MyNote[];

  constructor (private httpNoteService: HttpNoteService) {}

  ngOnInit(): void {
    this.getNote();
  }

  async getNote() {
    try {
      this.noteList = await this.httpNoteService.getNotes();
    } catch (err) {
      console.log(err);
    }
  }

  async onAddNote(note: MyNote) {
    console.log(note);
    try {
      await this.httpNoteService.postNote(note);
      this.getNote();
    } catch (err) {
      console.log(err);
    }
  }

  async onDeleteNote(id: number | any) {
    try {
      await this.httpNoteService.deleteNote(id);
      this.getNote();
    } catch (err) {
      console.log(err);
    }
  }

  async onEditNote(id: number | any, note: MyNote) {
    let now = new Date();
    note = {
      noteTitle: note.noteTitle,
      noteText: note.noteText,
      noteDate: now.toLocaleString(),
    } 
    try {
      await this.httpNoteService.putNote(id, note);
      this.getNote();
    } catch (err) {
      console.log(err);
    }
  }
}