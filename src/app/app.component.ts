import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _apiService: ApiService) { }
  title = 'async-validations-sample';
  public isLoading: boolean = true
  
  public get userNameValue() {
    return this.userDetails.get('userName')
  }

  public get passwordValue() {
    return this.userDetails.get('password')
  }

  userDetails = new FormGroup({
    'userName': new FormControl('', [Validators.required, Validators.minLength(8)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)])
  });



  ngOnInit() {

  }

}
