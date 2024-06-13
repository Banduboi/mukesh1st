import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { SignpopDirective } from './signup/signup';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../home.page/home.page.component';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [CommonModule, FormsModule, SignpopDirective, RouterOutlet, RouterModule, HomePageComponent],
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  signupFormSubmitted = false;
  isSigningIn = false; // For loading state
  errorMessage1: string = '';
  currentDate: Date;
  showUsernameError: boolean = false;
  showPasswordError: boolean = false;
  showErrorMessage: string = '';
  showErrorForSignup: boolean = false;

  handleBlur(input: string, inputControl: any) {
    if (inputControl.invalid && inputControl.touched) {
      if (input === 'username') {
        this.showUsernameError = true;
        this.errorMessage = 'Username is required';
        setTimeout(() => {
          this.showUsernameError = false;
          this.errorMessage = '';
        }, 4000); // Show the error for 4 seconds
      } else if (input === 'password') {
        this.showPasswordError = true;
        this.errorMessage = 'Password is required';
        setTimeout(() => {
          this.showPasswordError = false;
          this.errorMessage = '';
        }, 4000); // Show the error for 4 seconds
      }
    }
  }
  onSignup() {
    this.showErrorForSignup = true;
    setTimeout(() => {
      this.showErrorForSignup = false;
    }, 5000); // Show the error for 4 seconds
    // Additional logic for signup
  }

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 100); // Updates every second
  }

  onSubmit() {
    if (this.username === 'Bandu' && this.password === 'Bandu') {
      this.errorMessage = 'Login successful!';
    } else {
      this.errorMessage = 'Invalid username or password!!!!!!!!!!!!!';
    }
  }
  onGoogleSignIn() {
    this.isSigningIn = true; // Start loading state
    // Simulate sign-in process (without actual authentication)
    setTimeout(() => {
      // Simulated success message
      alert('Google Sign-In successful');
      // Stop loading state
      this.isSigningIn = false;
    }, 4000); // Simulate a delay of 2 seconds
  }


}
