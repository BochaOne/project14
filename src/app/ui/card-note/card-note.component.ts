import { NodeWithI18n } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MyNote } from 'src/app/shared/Interfaces/note.interface';



@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css']
})
export class CardNoteComponent implements OnInit {

  @Input() note!: MyNote;

  @Input() title = "";
  @Input() text = "";
  

  modeEdit = false;

  @Output() deleteNote = new EventEmitter<number>();

  @Output() editNote = new EventEmitter<MyNote>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteNote() {
    this.deleteNote.emit(this.note.id);
  }

  onEditNote() {
    this.modeEdit = false;
    this.editNote.emit(this.note);
  }
}
