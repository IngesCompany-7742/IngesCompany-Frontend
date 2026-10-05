import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSwitcher } from '../language-switcher/language-switcher';


/**
 * @summary Toolbar for Doofplus frontend.
 * @remarks Presentational component that has the logo of the brand,
 * the title and language switcher. It is mainly used in
 * public views where the Sidenav is not required.
 * @author Doofplus
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, LanguageSwitcher],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {}
