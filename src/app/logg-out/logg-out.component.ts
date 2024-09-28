import { Component, Input, OnInit } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { CommonModule } from '@angular/common'; // ngModule, ngClass, ngStyle
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logg-out',
  standalone: true,
  imports: [HighlightDirective, CommonModule, RouterOutlet],
  templateUrl: './logg-out.component.html',
  styleUrl: './logg-out.component.css'
})

// class LoggOutComponent -> MainAngularClass { onInit, onDestroy }
// onInit -> ngOnInit

// type |, &

// Route & LoggOutComponent => Route + LoggOutComponent
// string | null => string or null 

export class LoggOutComponent implements OnInit  {
  smth: string | null = "0"; 
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // method triggers on component initialization
    this.smth = this.route.snapshot.paramMap.get('id') // id not null
    // ! === i guarantee the variable is not null
  }

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
  paramInput: string = ""

  

  redirect = () => {
    // routerLink = ["/params"]
    // navigate(["/params"], { id: this.paramInput })

    // full path router !== 
    // string === ./string
    // /string
    this.router.navigate(["next", this.paramInput ], {
      relativeTo: this.route
    })
  }

  handleInputChange = (event: any) => {
    // event -> class Event -> target -> value
    console.log(event)
    this.paramInput = event.target.value;
  }

  handleButtonClick = (event: any) => {
    console.log(event)
    this.isClassRed = !this.isClassRed
  } 
}
