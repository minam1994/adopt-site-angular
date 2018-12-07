import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = {
    name: '',
    username: '',
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}){
    if(valid) {
      document.getElementById('form').style.display = 'none';
      document.getElementById('valid').style.display = 'block';
    } else {
      console.log('invalid');
      document.getElementById('invalid').textContent = "Insert valid informations"
    }
  }
}
