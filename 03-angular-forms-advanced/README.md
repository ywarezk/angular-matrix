# Advanced forms with angular

@angular/forms

template driven forms - ngModel, ngForm
reactive forms - FormControl, FormGroup, FormArray, formGroup, formControl, formArray

## How angular wants us to look at the forms we develop


<form> FormGroup
    <h1>Login form</h1>
    <input name="username" /> FormControl
    <input name="password" /> FormControl
</form>

<form> FormGroup
    <h1>Register form</h1>
    <input name="email" /> formControl
    <div> FormGroup
        <input name="password" /> formControl
        <input name="repeat-password" /> formControl
    </div>    
</form>

<form> FormGroup
    <input name="fullName"> FormControl

    <div> FormArray
        <div> FormGroup
            <input name="city" /> FormControl
            <input name="street" /> FormControl
        </div>
        <button>Add address</button>
    </div>
</form>

### ControlValueAccessor

interface
bridge between formcontrol -> input in form
every input in the form implements ControlValueAccessor
by implementing this interface the forms control can stay in sync with the input

1. every input implements ControlValueAccessor
2. every input that implements controlValueAccessor register himself in the DI

### input phone number

we can place it in a form
formControl to it
select with bunch of prefix
input for phone number

form have repeating elements
we can create custom form controls
ControlValueAccessor
```
providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PhoneNumberComponent)
    }
  ]
```

### EX.

- you need to create the first ControlValueAccessor
- component
- the component contains a text input
- https://nztodo.herokuapp.com/api/task/?format=json&search=title
- li list of what the server returns
- every li in the list have a click event clicking the li is like changing the value
- the value of the control should be the entire object
- the li should display only the title
- you need to attach a [formControl] to you custom form component
- you need to print the value in the template.

