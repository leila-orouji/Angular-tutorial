import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Feedback , ContactType} from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  constructor(private formBuilder:FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
      
  }
  createForm(){
    this.feedbackForm = this.formBuilder.group({
      firstname: "",
      lastnamae: "",
      telnum: 0,
      email: "",
      agree: false,
      contacttype: "None",
      message: ""
    })
  }
  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log('status: ', this.feedbackForm.status);
    this.feedbackForm.reset();
  }

}
