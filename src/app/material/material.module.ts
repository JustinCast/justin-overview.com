import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatButtonModule, MatTabsModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
