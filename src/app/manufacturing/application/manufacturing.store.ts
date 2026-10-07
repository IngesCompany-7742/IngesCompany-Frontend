import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Batch } from '../domain/model/batch.entity';
import { ManufacturingApi } from '../infrastructure/manufacturing-api';

@Injectable({
  providedIn: 'root'
})
/**
 * The ManufacturingStore is responsible for managing the state of manufacturing batches.
 * It provides methods to load batches from the API and create new batches, while keeping the state in memory.
 * @param manufacturingApi - The API service for manufacturing operations.
 */
export class ManufacturingStore {
  private batchesSource = new BehaviorSubject<Array<Batch>>([]);

  /**
   * An observable that emits the current list of batches.
   */
  public batches$ = this.batchesSource.asObservable();

  constructor(private manufacturingApi: ManufacturingApi) {}

  /**
   * Loads all batches from the API and updates the in-memory state.
   * If the API call fails, it logs the error to the console.
   */
  loadBatches(): void {
    this.manufacturingApi.getAllBatches().subscribe({
      next: (batches: Array<Batch>) => {
        this.batchesSource.next(batches);
      },
      error: (err) => console.error('Error loading batches:', err)
    });
  }

  /**
   * Creates a new batch in the API, adds it to the memory, and executes a callback.
   * @param batchData - The data for the new batch.
   * @param onSuccess - The callback to execute on success.
   */
  createBatch(batchData: any, onSuccess: () => void): void {
    this.manufacturingApi.createBatch(batchData).subscribe({
      next: (newBatch: Batch) => {
        const currentBatches = this.batchesSource.getValue();
        this.batchesSource.next([...currentBatches, newBatch]);

        onSuccess();
      },
      error: (err) => console.error('Error creating batch:', err)
    });
  }
}
