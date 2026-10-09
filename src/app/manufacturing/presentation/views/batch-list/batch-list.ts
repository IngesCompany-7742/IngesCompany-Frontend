import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManufacturingStore } from '../../../application/manufacturing.store';
import { Batch } from '../../../domain/model/batch.entity';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './batch-list.html',
  styleUrl: './batch-list.css'
})

/**
 * Componente BatchList
 * shows a list of batches and allows navigation to batch details.
 */
export class BatchList implements OnInit {
  batches: Array<Batch> = [];

  private store = inject(ManufacturingStore);

  ngOnInit(): void {
    this.store.batches$.subscribe(data => {
      this.batches = data;
    });

      this.store.loadBatches();
  }
}
