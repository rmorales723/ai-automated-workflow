import { Injectable } from '@angular/core';
import { Music } from '../../../shared/models/music';


import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayMusicService {
  albums: Music[] = [
    {
    "id": 0,
    "title": "Magic Carpet Ride",
    "artist": "Steppenwolf",
    },
    {
    "id": 1,
    "title": "Got Ur Back",
    "artist": "Sharam Jey",
    },
    ]
    getMusic = (): Observable<Music[]> => {
      return of(this.albums);
  };
  }
