import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {bootstrapInstagram,bootstrapFacebook,bootstrapTwitter,bootstrapGoogle,bootstrapYoutube} from '@ng-icons/bootstrap-icons'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({bootstrapInstagram,bootstrapFacebook,bootstrapTwitter,bootstrapGoogle,bootstrapYoutube})]
})
export class AppComponent {
  title = 'LogInAndDashboardWithAngular';
}
