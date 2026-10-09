import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ManufacturingStore } from '../../../application/manufacturing.store';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-batch-form',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './batch-form.html',
  styleUrl: './batch-form.css'
})

/**
 * BatchForm component for creating a new batch.
 */
export class BatchForm {
  newBatch = {
    id: '',
    productFormula: '',
    quantity: 0,
    status: 'Planned'
  };

  private store = inject(ManufacturingStore);
  private router = inject(Router);

  /**
   * Handles the form submission for creating a new batch.
   */
  onSubmit(): void {
    if (this.newBatch.productFormula && this.newBatch.quantity > 0) {
      this.store.createBatch(this.newBatch, () => {
        this.router.navigate(['/batches']);
      });
    }
  }
}
