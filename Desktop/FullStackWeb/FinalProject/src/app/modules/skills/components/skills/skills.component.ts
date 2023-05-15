import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../../assets/shared/models/skill';
import { Level } from '../../../../../assets/shared/types/level.enum';
import { SkillsService } from '../../services/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;n
  
  constructor(private skillsService: SkillsService) { 
    this.dataService = skillsService;
  }

  ngOnInit(): void {
    this.dataService.getSkills().subscribe(skills => this.skills = skills);
}
}
