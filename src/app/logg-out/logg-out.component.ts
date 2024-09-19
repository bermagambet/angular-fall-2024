import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-logg-out',
  standalone: true,
  imports: [],
  templateUrl: './logg-out.component.html',
  styleUrl: './logg-out.component.css'
})
export class LoggOutComponent {
  @Input()
  login: string = '';

  @Input()
  doLogOut = () => {}
}
