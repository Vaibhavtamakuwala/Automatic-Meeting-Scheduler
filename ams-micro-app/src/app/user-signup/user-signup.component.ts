import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../http-services/login/login.service';
import { User } from '../model/login/user';

@Component({
  selector: 'kykz-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  regiForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService) {


    // To initialize FormGroup  
    this.regiForm = fb.group({
      'schoolId': [null, Validators.required],
      'classId': [null, Validators.required],
      'firstName': [null, Validators.required],
      'middleName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'password': [null, Validators.required],
      'confirmPassword': [null, Validators.required],
      'email': [null, Validators.required]

    });

  }

  ngOnInit(): void {
  }
  user: User =new User();

  // Executed When Form Is Submitted  
  onFormSubmit(form: NgForm) {
    this.user = Object.assign(this.user, form);

    this.loginService.signup(this.user).subscribe(data=>console.log(data))
  }
}
