import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatButtonModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
