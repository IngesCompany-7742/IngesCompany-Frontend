import {Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {filter, map} from 'rxjs';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {environment} from '../../../../../environments/environment';

/**
 * @summary Toolbar for Doofplus frontend.
 * @remarks Presentational component that has the logo of the brand, which opens the sign-in, a link one level up
 * and the language switcher. On the sign-in entry page the link goes back to the Landing Page; on the sign-in of
 * each environment it goes back to the choice of environment. It is used in public views where the workspace
 * sidebar is not required.
 * @author Doofplus
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIcon, RouterLink, TranslatePipe, LanguageSwitcher],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  private readonly router = inject(Router);

  /** URL of the DoofPlus Landing Page. */
  protected readonly landingUrl = environment.landingPageUrl;

  /** Current URL of the router. */
  private readonly url = toSignal(
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(event => event.urlAfterRedirects)),
    {initialValue: this.router.url});

  /** Whether the current page is the sign-in entry page, where the user chooses the environment. */
  protected readonly isEntryPage = computed(() => this.url().split(/[?#]/)[0] === '/sign-in');
}
