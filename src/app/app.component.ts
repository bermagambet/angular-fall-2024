import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmitterTestComponent } from './emitter-test/emitter-test.component';

@Component({
  selector: 'app-root', // use as html tag for render
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, EmitterTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myProperty = '1'

  checkIfSomeoneClickedButtonInChild = () => {
    console.log('clicked in parent')
  }
}
