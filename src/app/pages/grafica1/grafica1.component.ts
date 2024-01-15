import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

public labels1:string[] = ['Enero', 'Febrero', 'Marzo']
public data1:number[] = [300, 500, 100]
public colors1:string[] = ['#FF6384', '#36A2EB', '#FFCE56']


}
