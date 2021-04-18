import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Auth/verify-email/verify-email.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { OrdersComponent } from './Dashboard/orders/orders.component';
import { OverviewComponent } from './Dashboard/overview/overview.component';
import { ProductsComponent } from './Dashboard/Products/products/products.component';
import { SalesComponent } from './Dashboard/sales/sales.component';
import { SettingsComponent } from './Dashboard/settings/settings.component';
import { AuthGuard } from './Guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {
      path: '',
      redirectTo: 'overview',
      pathMatch: 'full'
    },
    { path: 'overview', component: OverviewComponent },
    { path: 'sales', component: SalesComponent},
    { path: 'orders', component: OrdersComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'settings', component: SettingsComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
