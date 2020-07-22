import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';


export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}
const TREE_DATA = JSON.stringify({
  Wireframe: [
    [
      {
        "id": 10,
        "name": "job6",
        "parentid": 8,
        "chainJob": "HKACLAMC;LA",
        "index": 3,
        "external": false,
        "children": null
      },

      {
        "id": 10,
        "name": "job6",
        "parentid": 9,
        "chainJob": "ASDLJBCJNDS CMS ",
        "index": 2,
        "external": false,
        "children": null
      },
     ],
    {
      "id": 6,
      "name": "job1",
      "parentid": 0,
      "chainJob": "MDKSC KSJ DVKJNKJSN",
      "index": 1,
      "external": false,
      "children": null
    },
  {
        "id": 7,
        "name": "job2",
        "parentid": 6,
        "chainJob": "AFSJDKCHNAKND",
        "index": 1,
        "external": false,
        "children": null
      },
      {
        "id": 8,
        "name": "job3",
        "parentid": 7,
        "chainJob": "HKACLAMC;LA",
        "index": 2,
        "external": false,
        "children": null
      },
      {
        "id": 9,
        "name": "job4",
        "parentid": 6,
        "chainJob": "NEFCKS VKJNVW",
        "index": 1,
        "external": false,
        "children": null
      },    
  ],

});

@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    const dataObject = JSON.parse(TREE_DATA);
    const data = this.buildFileTree(dataObject, 0);
    this.dataChange.next(data);
  }
  buildFileTree(obj: {[key: string]: any}, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value1 = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value1 != null) {
        if (typeof value1 === 'object') {
          node.children = this.buildFileTree(value1, level + 1);
        } else {
          node.type = value1;
        }
      }
      return accumulator.concat(node);
    }, []);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[FileDatabase]
})
export class AppComponent{
  title = 'moratorium';
  slider: any;
  output: any;
  value = 50;

  detailsArr = ['Tenure', 'ROI', 'EMIs paid till date', 'Balance POS', 'Balance Tenure (in Months)', 'Compound Interest option'];
 
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;

  }
