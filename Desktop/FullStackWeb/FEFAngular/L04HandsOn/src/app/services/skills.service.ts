import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: Skill[] = [
        {
            id: 0,
            name: 'Mathematics',
            level: Level.Expert
        },
        {
            id: 1,
            name: 'Philosophy of money',
            level: Level.Advanced
        },
        {
            id: 2,
            name: 'Developing Java Software',
            level: Level.Expert
        }
    ];

    constructor() {}
}
