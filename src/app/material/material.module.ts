import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatExpansionModule,
  MatButtonModule,
  MatTabsModule,
  MatChipsModule,
  MatIconModule,
  MatDialogModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule {}
