import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _fb: FormBuilder) { }
  title = 'async-validations-sample';
  userDetails!: FormGroup



  public get userNameValue() {
    return this.userDetails.get('userName')
  }

  public get passwordValue() {
    return this.userDetails.get('password')
  }

  ngOnInit() {
    this.userDetails = this._fb.group({
      userName: ['', [Validators.required, Validators.minLength(8)], this.userNameNotAllowed],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  private userNameNotAllowed(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      const userNamesInDB = ["userName1", "userName2", "userName3", "userName4", "userName5"]
      setTimeout(() => {
        if (userNamesInDB.includes(control.value)) {
          resolve({ userNameNotAllowed: true })
        }
        else resolve(null)
      }, 2000)
    })

  }

}
