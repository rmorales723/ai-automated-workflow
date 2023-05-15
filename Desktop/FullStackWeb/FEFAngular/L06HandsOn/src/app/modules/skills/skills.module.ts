import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsService } from './services/skills.service';
import { SkillsComponent } from './components/skills.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SkillsComponent],
  exports: [SkillsComponent],
  providers: [SkillsService]
})
export class SkillsModule { }