import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

}
