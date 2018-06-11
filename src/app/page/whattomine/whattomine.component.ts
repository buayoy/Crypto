import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WhattomineService } from '../../service/whattomine.service';

@Component({
  selector: 'app-whattomine',
  templateUrl: './whattomine.component.html',
  styleUrls: ['./whattomine.component.css']
})
export class WhattomineComponent implements OnInit {

  constructor(
    private router:Router,
    private whattomineService:WhattomineService
  ) { }

  ngOnInit() {
  }

}
