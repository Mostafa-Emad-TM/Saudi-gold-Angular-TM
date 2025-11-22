import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-par',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-par.component.html',
  styleUrl: './side-par.component.css'
})
export class SideParComponent {

}
