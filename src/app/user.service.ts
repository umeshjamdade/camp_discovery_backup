import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Constants } from './constant';
import 'rxjs/add/observable/throw';

@Injectable()
  export class UserService {
  userName = 'Sherlock Holmes';

  private heroesUrl = Constants.API_URL;  // URL to web API
  constructor (public http: Http) { }

  // Common Header method
  addHeader(): Observable<any> {
    let headers = new Headers(); // ... Set content type to JSON
    headers.append('Content-Type', 'application/json');
    let options: any = new RequestOptions({ headers: headers });
    return options;
  }

  getHeroes(): Observable<any> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  loginUser(body: Object): Observable<any> {
    let Header = this.addHeader();
    return this.http.post(Constants.LOGIN_API_URL, body)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createUser(body: Object): Observable<any> {
    let Header = this.addHeader();
    return this.http.post(Constants.SIGNUP_API_URL, body, Header)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addNewChild(body: Object): Observable<any> {
    let Header = this.addHeader();
    return this.http.post(Constants.ADD_NEW_KID_API_URL, body, Header)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addExstingChild(body: Object): Observable<any> {
    let Header = this.addHeader();
    return this.http.post(Constants.ADD_EXISTING_KID_API_URL, body, Header)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addNewGroup(body: Object): Observable<any> {
    let Header = this.addHeader();
    return this.http.post(Constants.ADD_NEW_GROUP_API_URL, body, Header)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getkidData(body: Object): Observable<any> {
    let Header = this.addHeader();
    return this.http.post(Constants.GET_KID_DATA_API_URL, body, Header)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getGroupData(body: Object): Observable<any> {
    let Header = this.addHeader();
    return this.http.post(Constants.GET_GROUP_DATA_API_URL, body, Header)
      .map(this.extractData)
      .catch(this.handleError);
  }


    private extractData(res: Response) {
      let body = res.json();
      body = JSON.parse(body.message);
      return body;
    }

    private handleError (error: Response | any) {

      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.log(error);
      return Observable.throw(error);
    }

}
