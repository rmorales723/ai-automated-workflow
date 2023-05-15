import { Injectable } from '@angular/core';
import { Skill } from '../../../../assets/shared/models/skill';
import { Level } from '../../../../assets/shared/types/level.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Team player',
      level: Level.Expert
    },
    {
      id: 1,
      name: 'Attention to detail',
      level: Level.Advanced
    },
    {
      id: 2,
      name: 'Excellent organizational and time management',
      level: Level.Expert
    },
    {
      id: 3,
      name: 'Self-development skills to keep up to date with fast-changing trends and technologies',
      level: Level.Expert
    }];

    getSkills = (): Observable<Skill[]> => {
      return of(this.skills);
  };

  constructor() { }
}
