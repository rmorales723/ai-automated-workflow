import { BrianModule } from './brian.module';

describe('BrianModule', () => {
  let brianModule: BrianModule;

  beforeEach(() => {
    brianModule = new BrianModule();
  });

  it('should create an instance', () => {
    expect(brianModule).toBeTruthy();
  });
});
