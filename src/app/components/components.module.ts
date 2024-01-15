import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AugmenterComponent } from './augmenter/augmenter.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AugmenterComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
	 FormsModule,
	 NgChartsModule
  ],
  exports:[
	AugmenterComponent,
	DonutComponent
  ]
})
export class ComponentsModule { }
