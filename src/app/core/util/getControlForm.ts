import { AbstractControl, FormGroup } from '@angular/forms';
/**
 * @description A function that returns the controller of the form field.
 * @param formGroup type FormGroup
 * @param controlName type string
 * @returns AbstractControl || null
 */
export function getControl(formGroup: FormGroup, controlName: string): AbstractControl | null {
  return formGroup.get(controlName);
}
