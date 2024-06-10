import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from '../app/teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoYoutube';
}
