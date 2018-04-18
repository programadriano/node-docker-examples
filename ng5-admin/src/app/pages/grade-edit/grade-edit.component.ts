import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.scss']
})
export class GradeEditComponent implements OnInit {

  public movie: Movie;


  constructor(
    private scheduleService: GradeService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // // this.schedule = new Grade();
    // // this.activatedRoute.params.subscribe(param => {
    // //   console.log('here', );
    // //   this.programId = param['id'];
    // //   this.getSchedule(this.programId);
    // })


  }

  ngOnInit() {  }


  fileChange(event) {
    //this.schedule.Thumb = event.target.files;
  }

  getSchedule(id) {
    this.activatedRoute.params.subscribe(param => {
      this.scheduleService.getById(id)
        .subscribe(
          this.cbGetScheduleSuccess.bind(this),
          this.cbGetScheduleError.bind(this)
        );
    });
  }

  cbGetScheduleSuccess(response) {
    // this.schedule = response;
    // this.schedule.Thumb = response.thumb;
  }

  cbGetScheduleError(error) {
    console.log('ERROR', error);
    return this.alertService.error('Erro', 'Programação Não encontrada.', 'OK')
      .then(() => {
        this.router.navigate(['/grade']);
      });
  }

  save(programName, hourInit, hourEnd, link, monday, tuesday, wednesday, thursday, friday, saturday, sunday, autoTurnOn) {


    // this.schedule.ProgramId = programName;
    // this.schedule.HourInit = hourInit;
    // this.schedule.HourEnd = hourEnd;
    // this.schedule.Link = link;
    // this.schedule.Thumb = this.schedule.Thumb;
    // this.schedule.AutoTurnOn = autoTurnOn;



    // this.schedule.monday = monday;
    // this.schedule.tuesday = tuesday;
    // this.schedule.wednesday = wednesday;
    // this.schedule.thursday = thursday;
    // this.schedule.friday = friday;
    // this.schedule.saturday = saturday;
    // this.schedule.sunday = sunday;


    // if (this.schedule.Thumb == undefined || (this.schedule.Thumb != undefined && this.schedule.Thumb.length == 0)) {

    //   this.scheduleService.uploadImage(this.schedule.Thumb)
    //     .subscribe((data) => {
    //       let urlImage = data.json();
    //       this.schedule.Thumb = urlImage[0];
    //       this.scheduleService.update(this.programId, this.schedule)
    //         .subscribe(this.cbSaveSuccess.bind(this), this.cbHandlerError.bind(this));
    //     })
    // } else {
    //   this.scheduleService.update(this.programId, this.schedule)
    //     .subscribe(this.cbSaveSuccess.bind(this), this.cbHandlerError.bind(this));
    // }


  }

  cbSaveSuccess(response) {
    return this.alertService.success('', 'Programa atualizado com sucesso', 'OK');
  }

  cbHandlerError(error) {
    return this.alertService.error('Erro', 'Ocorreu um erro ao cadastrar Programação', 'OK');
  }

}
