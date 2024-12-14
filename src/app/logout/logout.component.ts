import { Component } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(
    private router: Router,
    private emitter: EmitterService
  ) { }

  ngOnInit() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);    
  }

  ngOnDestroy() {
    this.emitter.startEvent();
  }  
}
