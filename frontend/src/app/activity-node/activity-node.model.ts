export class ActivityNodeCollection {
  nodeList: ActivityNode[] = [];
  activeNodes: number = 0;

  constructor() {

  }

  updateCollection(data: ActivityNode) {
    let shouldBeAdded: boolean = true;
    this.activeNodes = 0;

    this.nodeList.forEach((node) => {
      if (node.appId == data.appId) {
        shouldBeAdded = false;
      }
      if (node.isOnline) {
        this.activeNodes++;
      }
    });

    if (shouldBeAdded) {
      this.nodeList.push(new ActivityNode(data));
    }

    this.nodeList.forEach((node) => {
      if (node.appId == data.appId) {
        node.updateNode(true, data.time, this.activeNodes);
      } else {
        node.updateNode(false, data.time, this.activeNodes);
      }
    })
  }
}

export class ActivityNode {
  appId: string = '';
  message: string = 'Not found';
  time: Date = new Date();
  inUse: boolean = false;
  status: string = '';

  tickCount: number = 0;
  isOnline: boolean = false;
  highlighted: boolean = false;
  blankHits: number = 0;
  version: string = '1.0';

  constructor(data?: any) {
    if (data) {
      this.appId = data.appId;
      this.message = data.message;
      if (this.message == 'Connected') {
        this.isOnline = true;
      }
      if (data.version) {
        this.version = data.version;
      }
      this.status = 'Connected';
      this.time = new Date(data.time);
      this.tickCount = 0;
      this.highlighted = true;
    }
  }

  updateNode(nodeFounded: boolean, date: Date, nodeCount: number): void {
    if (nodeFounded) {
      this.isOnline = true;
      this.tickCount++;
      this.time = date;
      this.blankHits = 0;
      this.status = 'Connected';
      if (!this.inUse) {
        this.inUse = true;
        this.highlighted = true;
        setTimeout(() => {
          this.highlighted = false;
          this.inUse = false;
        }, 1000);
      }
    } else {
      this.blankHits++;
      let tempCount = 0;
      if (nodeCount > 3) {
        tempCount = 2;
      } else {
        tempCount = 3;
      }
      if (this.blankHits >= nodeCount * tempCount) {
        this.isOnline = false;
        this.status = 'Disconnected';
        this.highlighted = false;
      }
    }
  }
}
