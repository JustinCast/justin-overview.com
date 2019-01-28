import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiManagementService } from '../api-management.service';

@Component({
  selector: 'app-rate-me',
  templateUrl: './rate-me.component.html',
  styleUrls: ['./rate-me.component.scss']
})
export class RateMeComponent implements OnInit {
  rateMeGroup: FormGroup;
  options = [
    "From University",
    "I did a project with you",
    "I've heard about you",
    "I saw your profile on Github"
  ];
  constructor(private _fb: FormBuilder, private _management: ApiManagementService) { 
    this.rateMeGroup = this._fb.group({
      'fullname': ["", Validators.required],
      'meet': ["", Validators.required],
      'email': ["", Validators.required],
      'phone': ["", Validators.required],
      'country': ["", Validators.required],
      'comment': ["", Validators.required]
    });
  }

  ngOnInit() {
    this._management.getCountries();
  }

}
