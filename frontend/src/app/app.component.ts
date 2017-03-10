import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import {ActivityNodeService} from './activity-node/activity-node.service';
import {Subscription, Observable} from 'rxjs/Rx';
import {ActivityNodeCollection} from './activity-node/activity-node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  refreshInterval: Subscription;
  isReady: boolean = false;
  nodesCollection: ActivityNodeCollection = new ActivityNodeCollection();
  requestCount: number = 0;

  constructor(private _activityNodeService: ActivityNodeService,
              private _ngZone: NgZone) {
  }

  ngOnInit() {
    this.startApp();
  }

  startApp(): void {
    setTimeout(() => {
      this.isReady = true;
      this.startInterval();
    }, 1500);
  }

  startInterval() {
    this._ngZone.runOutsideAngular(() => {
      this.refreshInterval = Observable.interval(2000).subscribe(success => {
        this._ngZone.run(() => {
          this.getNode();
        });
      });
    });
  }

  getNode() {
    this._activityNodeService.getNode().subscribe(
      res => {
        if (res.status == 200) {
          this.nodesCollection.updateCollection(res.json());
          this.requestCount++;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.refreshInterval.unsubscribe();
  }

}
