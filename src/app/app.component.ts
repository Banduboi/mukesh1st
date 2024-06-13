import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TogglePopupDirective } from './log/signup/popuup';
import { AppRoutingModule } from './app.routes';
import { HomePageComponent } from './home.page/home.page.component';
import { LogComponent } from './log/log.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TogglePopupDirective, AppRoutingModule, HomePageComponent, LogComponent],
  templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})

export class AppComponent {
  title = 'converter';
}
