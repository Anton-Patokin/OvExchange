import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {HoverClassDirective} from "./hover-class.directive";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatSliderModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonToggleModule,
    HoverClassDirective,
    MatSlideToggleModule,
    MatListModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  declarations: [
    HoverClassDirective
  ]
})
export class MaterialModule {
}
