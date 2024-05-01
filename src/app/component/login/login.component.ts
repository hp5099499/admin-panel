import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;


  ngOnInit(): void {
    this.setForm();
  }
  constructor(
    private _router: Router,
    private http:HttpClient,
    private _login: LoginService
  ) {
  }


  setForm() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }
  submit() {
    if (this.loginForm.valid) {
      this._login.loginUser(this.loginForm.value).subscribe({next: (resp:any) => {
          console.log(resp);

          localStorage.setItem('Firstname',resp.result.firstname);
          localStorage.setItem('Lastname',resp.result.lastname);
          localStorage.setItem('Email',resp.result.email);
          localStorage.setItem('id',resp.result._id);
          localStorage.setItem('token',resp.token);
          this._router.navigate(['dashboard']).then(()=>{
            alert("Login Successfully !")
          
          })
        }
        , error:(err) => {
      
          if(err.status==500){
            alert(err.error.msg)
          }
          
        }
  })


     
    }

  }
verifyToken(){
  let token=localStorage.getItem("token")
  if(token){

  this.http.get(`http://localhost:3000/verify-token?token=${token}`).subscribe({next:(resp)=>{
console.log(resp)
alert("token verify !")
},error:(err)=>{
  console.log(err);

}
})}}}

