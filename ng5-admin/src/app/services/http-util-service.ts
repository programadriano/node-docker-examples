import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpUtilService {

  constructor(private router: Router) { }

  private API_URL: string = 'http://localhost:3050';

  url(path: string) {
    return this.API_URL + path;
  }

  headers() {
    let headersParams = new Headers({ 'Content-Type': 'application/json' });

    if (localStorage['token']) {
      let authToken = localStorage['token'];
      headersParams.append('X-Access-Token', `${authToken}`);
      console.log('token' + headersParams['X-Access-Token']);
    }

    let options = new RequestOptions({ headers: headersParams });

    return options;
  }

  extrairDados(response: Response) {
    let data = response.json();
    console.log(data);
    return data || {};
  }

  processarErros(erro: any) {

    if (erro.status === 401) {
      delete localStorage['user'];
      delete localStorage['token'];
      location.reload();
      this.router.navigate(['/login']);
    }


     return Observable.throw('Erro acessando servidor remoto.');
  }
}
