import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayMusicComponent } from './display-music/display-music.component';
import { DisplayMusicService } from './services/display-music.service';

@NgModule({
  imports: [CommonModule],
  declarations: [DisplayMusicComponent],
  exports: [DisplayMusicComponent],
  providers: [DisplayMusicService]
})
export class MusicModule { }
