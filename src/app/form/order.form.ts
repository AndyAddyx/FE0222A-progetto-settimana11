import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms'

export const OrderForm = new FormGroup({
  name: new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])
  ),
  address: new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])
  )
})

export const OrderFormValidationMessages = {
  name: [
    { type: 'required', message: 'Name is required.' }
  ],
  address: [
    { type: 'required', message: 'Address is required.' }
  ]

}
