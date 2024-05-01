import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../component/navigation/navigation.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,
    NavigationComponent,RouterLink
    
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
