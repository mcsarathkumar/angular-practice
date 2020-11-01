import {Component, OnDestroy, OnInit} from '@angular/core';
import {observable, Observable, Observer, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit, OnDestroy {

  compPromise: Promise<string>;
  promiseResponse = '';
  startValue = 1;
  endValue = 1;

  subjectObj = new Subject<string>();
  subscriptionObj: Subscription;
  subjectResponse = '';

  observableObj: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.subscriptionObj = this.subjectObj.subscribe(value => {
      this.subjectResponse = value;
    });
    this.subjectObj.next('hello');

    this.observableObj = new Observable<string>(obser => {
      obser.next('hello 1');
      obser.next('hello 2');
      setTimeout(() => {
        obser.next('hello 3');
        obser.complete();
      }, 10);
    });

    console.log('before subscription');
    this.observableObj.subscribe(val => {
      console.log(val);
    });
    console.log('after subscription');

    // least priority
    this.compPromise = new Promise<string>((resolve, reject) => {
      if (this.startValue === this.endValue) {
        resolve(`${this.startValue} is equal to ${this.endValue}`);
      } else {
        reject(`${this.startValue} is not equal to ${this.endValue}`);
      }
    });

    this.compPromise.then(value => {
      this.promiseResponse = value;
    }).catch(value => {
      this.promiseResponse = value;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionObj.unsubscribe();
  }

}
