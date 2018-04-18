import { Routes, RouterModule, CanActivate } from '@angular/router'
import { LoginComponent } from "app/login/login.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from "app/guards/auth.guard";
import { GradeListComponent } from './pages/grade-list/grade-list.component';
import { GradeNewComponent } from './pages/grade-new/grade-new.component';
import { GradeEditComponent } from './pages/grade-edit/grade-edit.component';

export const APP_ROUTES: Routes = [
  {
    path: '', component: GradeListComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'movie', component: GradeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movie/new', component: GradeNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movie/edit/:id', component: GradeEditComponent,
    canActivate: [AuthGuard]
  }

]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
