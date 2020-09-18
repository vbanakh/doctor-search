import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ReformComponent } from './pages/reform/reform.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';

import { AdminCityComponent } from './admin/admin-city/admin-city.component';
import { AdminCityDistrictComponent } from './admin/admin-city-district/admin-city-district.component';
import { AdminClinicComponent } from './admin/admin-clinic/admin-clinic.component';
import { AdminSpecialityComponent } from './admin/admin-speciality/admin-speciality.component';
import { AdminDoctorsComponent } from './admin/admin-doctors/admin-doctors.component';
import { AdminAppointmentComponent } from './admin/admin-appointment/admin-appointment.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileGuard } from './shared/guards/profile.guard';
import { AppointmentComponent } from './pages/profile/appointment/appointment.component';
import { SearchComponent } from './components/search/search.component';
import { ClinicDoctorsComponent } from './pages/clinic-doctors/clinic-doctors.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'doctors/:param/:word', component: DoctorComponent },
  { path: 'clinic', component: ClinicComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'search/:param', component: SearchComponent},
  { path: 'reform', component: ReformComponent },
  { path: 'doctor-detail/:id', component: DoctorDetailsComponent },
  { path: 'clinic-doctors/:id', component: ClinicDoctorsComponent },
  { path: 'login-admin', component: LoginComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard], children:[
    { path: '', redirectTo: 'appointment', pathMatch: 'full' },
    { path: 'appointment', component: AppointmentComponent}
  ]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'admin-doctor', pathMatch: 'full' },
    { path: 'admin-city', component: AdminCityComponent  },
    { path: 'admin-district', component: AdminCityDistrictComponent },
    { path: 'admin-clinic', component: AdminClinicComponent},
    { path: 'admin-speciality', component: AdminSpecialityComponent},
    { path: 'admin-doctor', component: AdminDoctorsComponent },
    { path: 'admin-appointment', component: AdminAppointmentComponent }
  ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
