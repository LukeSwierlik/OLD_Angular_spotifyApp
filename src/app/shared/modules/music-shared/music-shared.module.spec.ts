import { MusicSharedModule } from './music-shared.module';

describe('MusicSharedModule', () => {
  let musicSharedModule: MusicSharedModule;

  beforeEach(() => {
    musicSharedModule = new MusicSharedModule();
  });

  it('should create an instance', () => {
    expect(musicSharedModule).toBeTruthy();
  });
});
