import { TestBed } from '@angular/core/testing';

import { ExcelExportService } from './excel-export.service';

describe('ExcelExportService', () => {
  let service: ExcelExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
