import { Component, OnInit } from '@angular/core';
import { InputValue } from 'src/InputValue';
import { ValueService } from '../services/value.service';

@Component({
  selector: 'app-add-inputs',
  templateUrl: './add-inputs.component.html',
  styleUrls: ['./add-inputs.component.css'],
})
export class AddInputsComponent implements OnInit {
  formData: InputValue = new InputValue();
  value: InputValue | undefined;

  constructor(private dataService: ValueService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.dataService.postData(this.formData).subscribe((response) => {
      this.value = response;
    });
  }
}
