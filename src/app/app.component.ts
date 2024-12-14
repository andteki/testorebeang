import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmitterService } from './shared/emitter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testorebeang';
  loggedIn = false;

  constructor(private emitter: EmitterService) {}

  ngOnInit() {
    this.emitter.event.subscribe(() => {
      this.loggedIn = this.loggedIn ? false : true;
    });
  }

}
