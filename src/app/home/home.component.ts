import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public registerForm: FormGroup | any;

  submitted = false;

  constructor(private fb: FormBuilder, public restApi: RestApiService) {  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      text_random: ['', Validators.required,  Validators.minLength(5),  Validators.maxLength(300)],
      api_url: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm?.valid) {
      return this.restApi.getAPIResp(this.registerForm.value.api_url).subscribe((data: {}) => {
        console.log(data)
      });
    }else{
      return null
    }
  }

}
