import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpUtilService } from "app/services/http-util-service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GradeService {

  private path = '/api/v1/movie';
  url: any;
  headers: any;

  constructor(private http: Http, private httpUtil: HttpUtilService) { }


  getAll() {
    let url = this.path;
    return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }

  getById(id) {
    let url = `${this.httpUtil.url(this.path)}/${id}`;

    return this.http.get(url, this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }

  save(movie) {
    let m = {
      "title": movie.title,
      "description": movie.description,
      "url": movie.url,
      "active": movie.active
    };

    console.log(m);

    return this.http.post(this.httpUtil.url("/api/v1/movie"), m, this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }


  delete(id) {
    return this.http.delete(this.httpUtil.url("/api/grade/" + id), this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }

  update(id, schedule) {

    let grade = {
      "ProgramId": schedule.ProgramId,
      "HourInit": schedule.HourInit,
      "HourEnd": schedule.HourEnd,
      "Link": schedule.Link,
      "Thumb": schedule.Thumb,
      "AutoTurnOn": schedule.AutoTurnOn,

      "Monday": schedule.monday,
      "Tuesday": schedule.tuesday,
      "Wednesday": schedule.wednesday,
      "Thursday": schedule.thursday,
      "Friday": schedule.friday,
      "Saturday": schedule.saturday,
      "Sunday": schedule.sunday
    };
    console.log('HERE', grade);

    return this.http.post(this.httpUtil.url("/grade/update?id=" + id), grade, this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }

}
