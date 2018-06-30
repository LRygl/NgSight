import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 2, name: 'dev-mail', isOnline: true},
  {id: 3, name: 'prod-web', isOnline: true},
  {id: 4, name: 'prod-mail', isOnline: false},
  {id: 5, name: 'uat-web', isOnline: true},
  {id: 6, name: 'uat-mail', isOnline: true},
  {id: 7, name: 'dev-shared', isOnline: true},
]


@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  } 

}
