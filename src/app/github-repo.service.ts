import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repository';

@Injectable()
export class GithubRepoService {
    constructor(private http: HttpClient) {}

    url = 'https://api.github.com/users/YouthCodeProject/repos?sort=updated&direction=desc';

    getRepos() {
        return this.http.get<Repository[]>(this.url);
    }
}
