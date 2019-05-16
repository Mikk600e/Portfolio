import { Injectable } from '@angular/core';
import { Teams } from "./teams";
import { TEAMS } from "./mockTeams";
import { Observable, of} from 'rxjs';
import { MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getTeams(): Observable<Teams[]>{
    this.messageService.add('TeamService: fetched teams');
    return of(TEAMS);
  }
  constructor(private messageService: MessageService) { }
}
