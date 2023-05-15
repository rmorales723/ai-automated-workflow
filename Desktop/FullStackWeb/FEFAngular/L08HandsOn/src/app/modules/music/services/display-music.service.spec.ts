import { TestBed, inject } from '@angular/core/testing';

import { DisplayMusicService } from './display-music.service';

describe('DisplayMusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayMusicService]
    });
  });

  it('should be created', inject([DisplayMusicService], (service: DisplayMusicService) => {
    expect(service).toBeTruthy();
  }));
});
