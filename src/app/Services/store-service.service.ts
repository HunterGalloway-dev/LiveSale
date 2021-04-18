import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor(
    private authService: AuthService
  ) { }

  testingFunc() {
    const userData = this.authService.getUserData();

    console.log(userData.uid);
  }
}
