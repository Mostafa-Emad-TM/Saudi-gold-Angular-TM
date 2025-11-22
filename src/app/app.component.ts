import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideParComponent } from './side-par/side-par.component';
import { CommonModule, NgIf,  } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideParComponent, RouterLink, CommonModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'saudi-gold';
  isShown: boolean = false;
  toggelLayer(event:Event) {
    event.stopPropagation();
    this.isShown = !this.isShown;
  }
 
  @HostListener('document:click', ['$event'])
  onDocumentClick(event : Event) {
    if (this.isShown) {
      this.isShown = false;
    }
  }
  


}

