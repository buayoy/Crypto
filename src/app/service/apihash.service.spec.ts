import { TestBed, inject } from '@angular/core/testing';

import { ApihashService } from './apihash.service';

describe('ApihashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApihashService]
    });
  });

  it('should be created', inject([ApihashService], (service: ApihashService) => {
    expect(service).toBeTruthy();
  }));
});
