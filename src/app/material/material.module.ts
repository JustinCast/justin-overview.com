import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
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
  MatSnackBarModule,
  MatCardModule
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
    NgxSpinnerModule,
    MatCardModule,
    NgbModule
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
    NgxSpinnerModule,
    MatCardModule,
    NgbModule
  ],
  declarations: []
})
export class MaterialModule {}
