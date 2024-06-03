import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from './shared/modules/referencias-material.module';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    ReferenciasMaterialModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Holidays';
}
