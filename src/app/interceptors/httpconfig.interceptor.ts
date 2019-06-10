import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.getToken()}`
      }
    });
  }
    return next.handle(request);
  }
  public getToken(): boolean {
   return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : false;
 }
}
