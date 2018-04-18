import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { HttpUtilService } from './http-util-service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService {

	private loginUrl: string = 'token/request';
	private logoutUrl: string = '';
	private IsUserLogged: boolean = false;
	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	logar(usuario: string, senha: string): Observable<User> {

    let user = {
      "UserName": usuario,
      "PassWord": senha
    };

    return this.http.post(this.httpUtil.url("/api/v1/login"), user, this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
	}


	UserLogged() {
		return this.IsUserLogged;
	}

	logOut() {
		delete localStorage['user'];
		delete localStorage['role'];
		delete localStorage['token'];
	}

	logado() {
		return localStorage['token'];
	}
}
