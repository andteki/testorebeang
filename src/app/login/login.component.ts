import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() changeEvent = new EventEmitter<string>();

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private emitter: EmitterService
  ) {}

  login(e: Event) {
    if(this.auth.login(this.username, this.password)) {
      this.changeEvent.emit(this.username);      
      this.emitter.startEvent();
      this.router.navigate(['products']);
    }    
  }
}
