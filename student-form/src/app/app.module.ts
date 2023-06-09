import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from '@angular/fire/compat'
import {environment} from 'src/environments/environment'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatDividerModule} from '@angular/material/divider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule} from '@angular/material/select';
import { MatOptionModule} from '@angular/material/core';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from 'src/login/login.component';
import { RegisterComponent } from 'src/register/register.component';
import { DashboardComponent } from 'src/dashboard/dashboard.component';

import { AuthService } from 'src/shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
