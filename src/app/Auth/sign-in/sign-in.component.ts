import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signinWithGoogle() {
    this.authService.providerLogIn(this.authService.googleProvider);
  }

}
