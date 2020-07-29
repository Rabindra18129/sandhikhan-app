import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sandhikhan-app';
  load: boolean;
  constructor(private router: Router,private elementRef: ElementRef) {
    this.load = true;
    this.router.events.subscribe(this.ShowLoader.bind(this));
  }
  ngOnInit() {

  }
  ShowLoader(e: Event): void {
    if (e instanceof NavigationStart) {
      this.load = true;
    } else if (e instanceof NavigationEnd) {
      this.load = false;
      this.scrollTop();
    } else if (e instanceof NavigationError) {
      this.load = false;
      this.scrollTop();
    } else if (e instanceof NavigationCancel) {
      this.load = false;
    }
  }
  scrollTop(): void {
  }
  onActivate(event) {
    
  }
}
