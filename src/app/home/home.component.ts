import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BusinessService } from '../services/business.service';
import { RestApiService } from '../services/rest-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public registerForm: FormGroup | any;

  submitted = false;

  constructor(private fb: FormBuilder, public restApi: RestApiService, public businessSrc : BusinessService) {  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      text_random: ['', [Validators.required,  Validators.minLength(1),  Validators.maxLength(300)]],
      api_url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm?.valid) {

      this.businessSrc.urlResultHandler(this.registerForm.value.api_url)
      this.restApi.getAPIResp(this.registerForm.value.api_url).subscribe((data: {}) => {
        console.log(data)
      });
      this.submitted = false;
    }else{
      this.submitted = true;
    }
  }

}
