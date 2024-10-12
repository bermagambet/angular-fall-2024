import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emitter-test',
  standalone: true,
  imports: [],
  templateUrl: './emitter-test.component.html',
  styleUrl: './emitter-test.component.css'
  
})
export class EmitterTestComponent {

  // emit - испускать
  // EventEmitter

  @Input() myVar: string = "1";
  @Output() eventClicked: EventEmitter<any> = new EventEmitter();
  
  someoneClicked = () => {
    // emit event to parent class
    this.eventClicked.emit()
    console.log('click')
  }
}
