import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatExpansionModule,
  MatButtonModule,
  MatTabsModule,
  MatChipsModule,
  MatIconModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule {}
