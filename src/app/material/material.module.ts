import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatExpansionModule,
  MatButtonModule,
  MatTabsModule,
  MatChipsModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatProgressBarModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule {}
