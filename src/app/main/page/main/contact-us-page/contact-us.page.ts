import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'contact-us-page',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss']
})
export class ContactUsPage implements OnInit {
  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  user = {}
  fullName = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
}
