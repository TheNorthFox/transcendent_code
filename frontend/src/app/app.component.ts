import { Component, OnInit } from '@angular/core';
import { InputValue } from 'src/InputValue';
import { ValueService } from './services/value.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projectView';
  inputValue: InputValue[] = [];
  private refreshPage: Subscription;
  data: any;
  errorMsg: string;
  formData: any;

  constructor(private valueService: ValueService) {}

  // reload page in 100 ms
  ngOnInit() {
    this.refreshPage = interval(100).subscribe((val) => {
      this.addValues();
    });
  }

  private addValues() {
    this.valueService.getAllData().subscribe((data) => {
      this.inputValue = data;
    });
  }

  onSubmit(formData: any) {
    this.valueService.postData(formData).subscribe(
      (response) => {
        this.data = response;
        this.errorMsg = '';
      },
      (error) => {
        this.errorMsg = 'Error: ' + error.message;
      }
    );
  }
}
