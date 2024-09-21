import { Component, Input } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { CommonModule } from '@angular/common'; // ngModule, ngClass, ngStyle

@Component({
  selector: 'app-logg-out',
  standalone: true,
  imports: [HighlightDirective, CommonModule],
  templateUrl: './logg-out.component.html',
  styleUrl: './logg-out.component.css'
})
export class LoggOutComponent {
  @Input()
  login: string = '';
  @Input()
  doLogOut = () => {}

  // CommonModule
  // NgStyle - style object, inline style
  // pStyle: Record<string, string> = {}

  // can bind data using (change) event with handler function

  // handleInputChange = (event: any) => {
  //   this.pStyle = {
  //     'font-size': `${event.target.value}px`
  //   }
  // }

  // NgClass - attribute which accepts JS returning classnames
  isClassRed: boolean = false;

  handleButtonClick = (event: any) => {
    console.log(event)
    this.isClassRed = !this.isClassRed
  } 
}
