import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardAdminComponent } from '../../components/dashboard/dashboard-admin/dashboard-admin.component';
import { SidenavDashboardAdminComponent } from '../../components/dashboard/sidenav-dashboard-admin/sidenav-dashboard-admin.component';
import { HomeDashboardAdminComponent } from '../../components/dashboard/home-dashboard-admin/home-dashboard-admin.component';
import { HeaderDashboardAdminComponent } from '../../components/dashboard/header-dashboard-admin/header-dashboard-admin.component';
// Imports do Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardAdminComponent,
    SidenavDashboardAdminComponent,
    HomeDashboardAdminComponent,
    HeaderDashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    //Imports do Material
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ]
})
export class AdminModule { }
