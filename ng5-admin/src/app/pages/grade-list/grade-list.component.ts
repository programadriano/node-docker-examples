import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {

  public movies: any;

  constructor(
    private scheduleService: GradeService,
    private alertService: AlertService, private _router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.scheduleService.getAll().subscribe(
      this.cbGetAllSuccess.bind(this),
      this.cbHandlerError.bind(this)
    );
  }

  edit(id: number) {
    this._router.navigate(['movie/edit', id]);
  }

  delete(id) {
    this.alertService.question2("", "Deseja realmente deletar esse registro?", "OK").then((willDelete) => {
      if (willDelete) {
        this.scheduleService.delete(id)
          .subscribe(this.cbSaveSuccess.bind(this), this.cbHandlerError.bind(this));
      }
    }).catch((error) => {
      console.log('here2')
    });
  }


  cbGetAllSuccess(response) {
    this.movies = response.result;
  }

  cbHandlerError(error) {
    this.alertService.error("Whoops", "Ocorreu um erro inesperado, tente novamente.", "OK");
  }

  remove(schedule) {
    console.log('REMOVENDO', schedule);
  }


  cbSaveSuccess(response) {
    this.getAll();
    return this.alertService.success('', 'Programa removido da grade com sucesso', 'OK');
  }


}
