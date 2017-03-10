import {Component, Input} from '@angular/core';
import {ActivityNode} from './activity-node.model';
import {Http} from '@angular/http';

@Component({
  selector: 'app-activity-node',
  templateUrl: './activity-node.component.html'
})
export class ActivityNodeComponent {
  @Input() nodeData: ActivityNode;

  constructor(private _http: Http) {

  }

}
