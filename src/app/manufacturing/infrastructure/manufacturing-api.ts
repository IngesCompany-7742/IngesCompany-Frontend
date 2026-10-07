import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Batch } from '../domain/model/batch.entity';
import { BatchResponse } from './batch-response';
import { BatchAssembler } from './batch-assembler';

@Injectable({
  providedIn: 'root'
})
export class ManufacturingApi {
  private basePath = 'http://localhost:3000/api/v1/production-batches';

  constructor(private http: HttpClient) {}

  getAllBatches(): Observable<Array<Batch>> {
    return this.http.get<Array<BatchResponse>>(this.basePath).pipe(
      map(responses => responses.map(response => BatchAssembler.toEntityFromResponse(response)))
    );
  }

  createBatch(batchData: any): Observable<Batch> {
    return this.http.post<BatchResponse>(this.basePath, batchData).pipe(
      map(response => BatchAssembler.toEntityFromResponse(response))
    );
  }
}
