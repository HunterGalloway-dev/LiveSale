import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Auth/verify-email/verify-email.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { OverviewComponent } from './Dashboard/overview/overview.component';
import { ProductsComponent } from './Dashboard/Products/products/products.component';
import { ProductViewComponent } from './Dashboard/Products/product-view/product-view.component';
import { ProductCreateComponent } from './Dashboard/Products/product-create/product-create.component';
import { ProductEditComponent } from './Dashboard/Products/product-edit/product-edit.component';
import { SalesComponent } from './Dashboard/sales/sales.component';
import { SettingsComponent } from './Dashboard/settings/settings.component';
import { OrdersComponent } from './Dashboard/orders/orders.component';
import { SalesCreateComponent } from './Dashboard/sales/sales-create/sales-create.component';
import { SalesEditComponent } from './Dashboard/sales/sales-edit/sales-edit.component';
import { ItemViewComponent } from './Components/item-view/item-view.component';
import { OrderTableComponent } from './Components/order-table/order-table.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    OverviewComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductCreateComponent,
    ProductEditComponent,
    SalesComponent,
    SettingsComponent,
    OrdersComponent,
    SalesCreateComponent,
    SalesEditComponent,
    ItemViewComponent,
    OrderTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
