import { TestBed } from '@angular/core/testing';

import { ExcelExportModelerService } from './excel-export-modeler.service';

describe('ExcelExportModelerService', () => {
  let service: ExcelExportModelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelExportModelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
