import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ActivityNodeService {
  env: any;
  constructor(private _http: Http) {
    this.env = environment;
  }

  getNode() {
    return this._http.get(this.env.backendEndpoint);
  }
}

