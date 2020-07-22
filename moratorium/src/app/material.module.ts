import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
// import {MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';

@NgModule({
  exports: [
    MatButtonToggleModule,
    MatTooltipModule ,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatTreeModule,
    // MatTreeFlattener,
    // MatTreeNestedDataSource
  ]
})
export class MaterialModule {}