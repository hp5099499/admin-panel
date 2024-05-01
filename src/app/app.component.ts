import { Component } from '@angular/core';
import { Router,RouterOutlet,RouterLink } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { HomepageComponent } from './components/homepage/homepage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    DashboardComponent,
    RouterOutlet,
    FormsModule, 
    HomepageComponent,
    ChartModule,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-pannel';
  constructor(private router:Router){}
  login(){
    this.router.navigate(['login'])
  }
  
  
  reg(){
    this.router.navigate(['register'])
  }
  home(){
    this.router.navigate([''])
  }
}
