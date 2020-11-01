import { Component, OnInit } from '@angular/core';
import {PipeExampleService} from './pipe-example.service';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss'],
  providers: [PipeExampleService]
})
export class PipeExampleComponent {

  constructor(private pipeService: PipeExampleService) {
  }

  name = 'AnGuLar frameWorK';

  curDate = new Date();

  tempNumber = 55.556;

  object = {
    framework: 'angular',
    version: 10
  };

  apiResponse = this.pipeService.fetchAlbums();

}
