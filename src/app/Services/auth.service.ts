import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public googleProvider = new firebase.auth.GoogleAuthProvider();

  private userDataSubject: Subject<any> = new Subject<any>();
  private userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) {
    // Subscribes to the events of detecting if  the user is logged in or out and sets data up accordingly
    this.afAuth.authState.subscribe((user) => {
      if(user) {
        this.setUserData(user);
        localStorage.setItem('user',this.userData);
        this.router.navigate(['/dashboard']);
      } else {
        localStorage.setItem('user',null);
      }
    });
  }

  getUserData() {
    return this.userData;
  }

  // Default sign in with email passsword
  signIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.setUserData(result.user);
      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']);
      });

    })
    .catch((error) => {
      window.alert(error);
    });
  }

  // Creates popup to log in with a certian provider i.e. google, facebook, twitter...
  providerLogIn(provider) {
    this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.setUserData(result.user);
      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']);
      });
    })
    .catch((error) => {
      window.alert(error);
    });
  }

  signOut() {
    this.afAuth.auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.setUserData(undefined);
      this.ngZone.run(() => {
        this.router.navigate(['/sign-in']);
      });
    });
  }

  setUserData(userData) {
    this.userData = userData;
    this.userDataSubject.next(this.userData);
  }

  signUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((result) => {
      this.sendVerificationEmail();
      this.setUserData(result.user);
    })
    .catch((error) => {
      window.alert(error);
    });
  }

  sendVerificationEmail() {
    this.afAuth.auth.currentUser.sendEmailVerification();
  }

  isLoggedIn(): boolean {
    return this.userData !== undefined;
  }

  isVerified(): boolean {
    if(this.userData) {
      return this.userData.emailVerified;
    } else {
      return false;
    }
  }
}
