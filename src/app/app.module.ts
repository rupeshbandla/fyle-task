import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import {
  MatDatepickerModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatStepperModule,
} from '@angular/material';
import {
  MatCheckboxModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatCardModule,
  MatDialogModule,
  MatChipsModule,
  MatTableModule,
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AssignmentsComponent } from './assignments/assignments.component'

const appRoutes: Routes = [

  { path: '', component: AssignmentsComponent },
  { path: 'banks/{bankid}', component: AssignmentsComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    NgxDaterangepickerMd,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    HttpModule,
    HttpClientModule,
    MatDatepickerModule, MatExpansionModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTabsModule, MatToolbarModule,
    MatTooltipModule, MatStepperModule,

  ],
  providers: [AngularFireAuth,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireDatabase,
    AngularFireAuthModule,
    AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

// HttpModule,HttpClient,HttpClientModule,MyServiceService
