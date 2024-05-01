import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userRegForm!: FormGroup;

  constructor(private _register: RegisterService) {

    this._register.registerUser({}).subscribe((data) => {
      console.log(data)
    })
  }



  ngOnInit(): void {
    this.setForm();
  }
  setForm() {
    this.userRegForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
  register() {
    console.log(this.userRegForm.value)
    console.log(this.userRegForm.valid)
    // return false;
    if (this.userRegForm.valid) {
      console.log(this.userRegForm.value)
      this._register.registerUser(this.userRegForm.value).subscribe((data: any) => {
        console.log(data)
        this.userRegForm.reset();

        alert(data.msg)
      })
    } else {
      alert('Please Fill Valid Details')
    }
  }



}