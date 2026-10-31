import {CanDeactivateFn} from '@angular/router';

/**
 * View that asks the user before leaving it when there is data that would be lost.
 */
export interface LeaveConfirmation {
  /**
   * Whether the user can leave the view.
   * @returns True when there is nothing to lose or the user confirms that they want to leave.
   */
  canLeave(): boolean;
}

/**
 * Asks the view before the router leaves it, so unsaved data is not lost by accident.
 */
export const unsavedChangesGuard: CanDeactivateFn<LeaveConfirmation> = component => component.canLeave();
