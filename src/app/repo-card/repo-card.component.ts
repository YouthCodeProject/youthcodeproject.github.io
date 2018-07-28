import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  constructor() { }

  @Input() repo: Repository;
  faBalanceScale = faBalanceScale;

  ngOnInit() {
  }

}
