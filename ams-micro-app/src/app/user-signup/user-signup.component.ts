import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  user: User = new User();

  // Executed When Form Is Submitted  
  onFormSubmit(form: NgForm,formDirective:FormGroupDirective) {
    this.user = Object.assign(this.user, form);

    this.loginService.signup(this.user).subscribe((data: any) => {
      console.log(data)

      data = JSON.parse(data)
      if (data.success) {
        alert(data.success.message);
        this.regiForm.reset();
        formDirective.resetForm();
      }
    }, err => {
      console.log(err)

      let errorObj = JSON.parse(err.error);

      alert(errorObj.error.message)
    }
    )

  }
}
