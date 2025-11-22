import { NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [FormsModule,NgIf,RouterLink,NgFor,ChartComponent],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.css'
})
export class SavingsComponent {
  selectedDiv: string = 'div1';

  btn_activ = 'btnow';
  setActive(name: string) {
    this.btn_activ=name;
  }

  activPage = 1;
  setActivepg(index: number) {
    this.activPage = index;
  }


}
