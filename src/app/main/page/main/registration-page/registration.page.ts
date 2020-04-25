import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'registration-page',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss']
})
export class RegistrationPage implements OnInit {
loginFormGroup:FormGroup;
signupFormGroup:FormGroup;

  constructor(private title: Title, private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.route.queryParams.subscribe((params) => {
      this.selectedIndex = +params['selectedIndex'];
    })
    this.signupFormGroup=this.fb.group({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      repeatPassword : new FormControl('', [Validators.required])
    })
    this.loginFormGroup=this.fb.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required])
    })
  }
  user = {}
  selectedIndex: number;

  onSignup(signup: NgForm) {
    if (signup.valid) {
    }
  }

  onLogin(login: NgForm) {
    if (login.valid) {
    }
  }
}
