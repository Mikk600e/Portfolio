import { Component, OnInit } from '@angular/core';
import { Teams } from '../teams';
import { TeamService } from '../team.service';
@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {
  teams: Teams[];
  Selectedteam : Teams;
  constructor(private teamService: TeamService) { }
  

  ngOnInit() {
    this.getTeams();
  }
  onSelect(teams: Teams): void {
    this.Selectedteam = teams;
  }
  getTeams(): void{
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
  }
}
