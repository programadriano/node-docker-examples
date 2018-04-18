import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { Movie } from '../../models/movie';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-grade-new',
  templateUrl: './grade-new.component.html',
  styleUrls: ['./grade-new.component.scss']
})
export class GradeNewComponent {

  public movie: Movie;

  constructor(
    private scheduleService: GradeService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }




  fileChange(event) {
    // this.thumb = event.target.files;
  }


  cbGetScheduleSuccess(response) {
    // this.schedule = response;
    // this.schedule.Thumb = response.thumb;
  }

  cbGetScheduleError(error) {
    return this.alertService.error('Erro', 'Vídeo Não encontrado.', 'OK')
      .then(() => {
        this.router.navigate(['/']);
      });
  }

  save(title, description, url, active) {

    this.movie = new Movie();
    this.movie.title = title;
    this.movie.description = description;
    this.movie.url = url;
    this.movie.active = active;

    this.scheduleService.save(this.movie)
      .subscribe(this.cbSaveSuccess.bind(this), this.cbHandlerError.bind(this));
  }

  cbSaveSuccess(response) {
    return this.alertService.success('', 'Vídeo adicionado com sucesso', 'OK');
  }

  cbHandlerError(error) {
    return this.alertService.error('Erro', 'Ocorreu um erro ao cadastrar o Vídeo', 'OK');
  }

}
