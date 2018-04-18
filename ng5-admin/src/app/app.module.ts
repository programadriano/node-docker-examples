
import { HttpUtilService } from './services/http-util-service';
import { LoginService } from './services/login-service';
import { AuthGuard } from './guards/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { routing } from "app/app.routing";


import 'sweetalert2';
import { AlertService } from "app/services/alert.service";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { DataTableModule } from 'primeng/primeng';
import { GradeNewComponent } from './pages/grade-new/grade-new.component';
import { GradeListComponent } from './pages/grade-list/grade-list.component';
import { GradeEditComponent } from './pages/grade-edit/grade-edit.component';
import { GradeService } from './services/grade.service';
import { StreamHeaderComponent } from './components/stream-header/stream-header.component';
import { StreamFooterComponent } from './components/stream-footer/stream-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    StreamHeaderComponent,
    StreamFooterComponent,
    GradeNewComponent,
    GradeListComponent,
    GradeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserModule,
    DataTableModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    HttpUtilService,
    AlertService,
    GradeService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
