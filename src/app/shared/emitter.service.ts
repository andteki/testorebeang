import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  event = new EventEmitter<string>();

  constructor() { }

  startEvent() {
    this.event.emit();
  }
}
