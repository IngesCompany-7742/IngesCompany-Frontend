import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  imports: [
    TranslatePipe
  ],
  styleUrl: './footer.css'
})
/**
 * Shared presentation component rendering the application footer.
 */
export class Footer {}
