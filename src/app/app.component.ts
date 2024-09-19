import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoggOutComponent } from './logg-out/logg-out.component';

@Component({
  selector: 'app-root', // use as html tag for render
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, LoggOutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  login: string = '';
  password: string = '';

  isAuthorized: boolean = false;

  doLogOut = () => {  // this -> declaration
    this.isAuthorized = false
  }

  doLogin = () => {
    console.log(this.login, this.password)
    if(this.password.length >= 8 && this.login.length <= 10 && this.password.includes('1')) {
      this.isAuthorized = true;
    } 
  } 
}
