import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/shared/models/music';
import { DisplayMusicService } from '../services/display-music.service';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})

export class DisplayMusicComponent implements OnInit {
  musics: Music[];
  dataService: DisplayMusicService;
  
  constructor( musicService: DisplayMusicService) { 
      this.dataService = musicService;
    
        }

   ngOnInit(): void  {
    this.dataService.getMusic().subscribe(music => this.musics = music)
  }
 
}

