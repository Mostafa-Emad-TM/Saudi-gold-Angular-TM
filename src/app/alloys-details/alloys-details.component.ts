import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alloys-details',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './alloys-details.component.html',
  styleUrl: './alloys-details.component.css'
})
export class AlloysDetailsComponent {




  disblay_img: string = './Assets/img/01-Gold-MintedBar-1g-Packaging-Reverse-LowRes.png';
  activBtn = 3;
  isFading = false;
  setImage(event: any ,btnIndex:number) {
    const imgSrc = event.target.closest('button').querySelector('img').src;
    this.isFading = true;
    setTimeout(() => {
      this.disblay_img = imgSrc;
      this.activBtn = btnIndex;
      this.isFading = false;
    }, 200);
  }
  // ------------------------------------------------------------------------------------

  isVisible :boolean = false;
  showOptions() {
    this.isVisible = true;
  }

  hideOptions() {
    this.isVisible = false;
  }
  toggleOptions() {
    this.isVisible = !this.isVisible;
  }
  onOverlayClick(event:Event) {
    if (event.target === event.currentTarget) {
      this.hideOptions();
    }
  }
  

}
