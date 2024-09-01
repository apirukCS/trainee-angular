import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagerTableComponent } from './pager-table/pager-table.component';

@NgModule({
  declarations: [
    InputComponent,
    PagerTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ //export component เพื่อให้ component อื่นที่เรียกใช้ SharedComponentsModule ให้สามารถใช้งาน components ต่อไปนี้ได้
    InputComponent,
    PagerTableComponent,
  ],
})
export class SharedComponentsModule { }
