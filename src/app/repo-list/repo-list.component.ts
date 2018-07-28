import { Component, OnInit } from '@angular/core';
import { GithubRepoService } from '../github-repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  providers: [ GithubRepoService ]
})
export class RepoListComponent implements OnInit {

  constructor(private github: GithubRepoService) { }

  repositories: Repository[];

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.github.getRepos().subscribe(
      (data: Repository[]) => this.repositories = data
    );
  }
}
