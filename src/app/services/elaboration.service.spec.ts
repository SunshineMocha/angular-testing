import { TestBed } from '@angular/core/testing';

import { ElaborationService } from './elaboration.service';

describe('ElaborationService', () => {
  let service: ElaborationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaborationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an array of numbers', ()=> {
    expect(service.fromStringToArrayOfNumbers('uh 1 h 22 3')).toEqual([1,22,3]);
  });

  it('should not have anomalies in the array of data', ()=> {
    expect(service.filterAnomalies([4, 50, 3, -20, 5], 10, -10)).toEqual([4, 10, 3, -10, 5]);
  });

  it('keepEven should only have even numbers', ()=> {
    const testElements = [[1,2,3,4],[2,6,8]];
    expect(testElements.map(a => service.keepEven(a))).toEqual([[2,4], [2,6,8]]);
  });
});
