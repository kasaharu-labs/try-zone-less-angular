import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'try-zone-less-angular';

  messageSubject = new BehaviorSubject<string>('');
  user$: Observable<any | null> = of(null);

  get message$() {
    return this.messageSubject.asObservable();
  }

  ngOnInit() {
    this.fetchUser();
  }

  // NOTE: click event
  showMessage() {
    this.messageSubject.next('Hello world');
  }

  // NOTE: Http request
  fetchUser() {
    this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
