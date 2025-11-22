import {Component ,ViewChild ,ElementRef ,AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas!: ElementRef;
  @ViewChild('myCanvas2') myCanvas2!: ElementRef;
  @ViewChild('myCanvas3') myCanvas3!: ElementRef;

  ngAfterViewInit() {
    const ctx = this.myCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
     type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
         
           {
            label: 'الرصيد',
            data: [0, 20, 50, 60, 75, 90, 100],
            fill: true,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 8, 0.3)',
            tension: 0.3,
             
          }
        ]
      }
    });
    
     const ctx2 = this.myCanvas2.nativeElement.getContext('2d');
    new Chart(ctx2, {
     type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
         
           {
            label: 'الاسعار',
            data: [0, 20, 50, 60, 40, 90, 100],
             fill: true,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            tension: 0.3,
            
          }
        ]
      }
    });
    
     const ctx3 = this.myCanvas3.nativeElement.getContext('2d');
    new Chart(ctx3, {
     type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
         
           {
            label: 'الاسعار',
            data: [0, 20, 50, 60, 40, 90, 100],
             fill: true,
            borderColor: 'blue',
            backgroundColor: 'rgba(30, 0, 255, 0.45)',
            tension: 0.3,
            
          }
        ]
      }
    });
  }
}