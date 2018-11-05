import { TestBed } from '@angular/core/testing';

import { PlaylistSelectionService } from './playlist-selection.service';

describe('PlaylistSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistSelectionService = TestBed.get(PlaylistSelectionService);
    expect(service).toBeTruthy();
  });
});
