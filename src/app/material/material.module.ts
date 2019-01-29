import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  MatExpansionModule,
  MatButtonModule,
  MatTabsModule,
  MatChipsModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatProgressBarModule,
  MatSnackBarModule
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
    MatProgressBarModule,
    MatSnackBarModule,
    NgxSpinnerModule
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
    MatProgressBarModule,
    MatSnackBarModule,
    NgxSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {}
