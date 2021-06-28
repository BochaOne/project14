import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyNote } from '../Interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpNoteService {

  routeApi = "http://localhost:3000/notes"

  constructor(private http: HttpClient) { }

  getNotes(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postNote(data: MyNote): Promise<any> {
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteNote(id: number): Promise<any> {
    return this.http.delete( `${this.routeApi}/${id}`).toPromise();
  }

  putNote (id: number, data: MyNote): Promise<any> {
    return this.http.put( `${this.routeApi}/${id}`, data).toPromise();
  }
}
