import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/';
import {NestedTreeControl} from '@angular/cdk/tree';
// import { MatTreeNestedDataSource } from '@angular/material/tree';
// import {MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/';
import {merge} from 'rxjs/';
// import {map} from 'rxjs/';

// export class GameNode {
//   children: BehaviorSubject<GameNode[]>;
//   constructor(public item: string, children?: GameNode[], public parent?: GameNode) {
//     this.children = new BehaviorSubject(children === undefined ? [] : children);
//   }
// }

// const TREE_DATA = [
//   new GameNode('Simulation', [
//     new GameNode('Factorio'),
//     new GameNode('Oxygen not included'),
//   ]),
//   new GameNode('Indie', [
//     new GameNode(`Don't Starve`, [
//       new GameNode(`Region of Giants`),
//       new GameNode(`Together`),
//       new GameNode(`Shipwrecked`)
//     ]),
//     new GameNode('Terraria'),
//     new GameNode('Starbound'),
//     new GameNode('Dungeon of the Endless')
//   ]),
//   new GameNode('Action', [
//     new GameNode('Overcooked')
//   ]),
//   new GameNode('Strategy', [
//     new GameNode('Rise to ruins')
//   ]),
//   new GameNode('RPG', [
//     new GameNode('Magicka', [
//       new GameNode('Magicka 1'),
//       new GameNode('Magicka 2')
//     ])
//   ])
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'moratorium';
  slider: any;
  output: any;
  value = 50;

  detailsArr = ['Tenure', 'ROI', 'EMIs paid till date', 'Balance POS', 'Balance Tenure (in Months)', 'Compound Interest option'];
 
  // data = [
  //   {
  //     "id": 7,
  //     "name": "job2",
  //     "parentid": 6,
  //     "chainJob": "AFSJDKCHNAKND",
  //     "index": 1,
  //     "external": false,
  //     "children": null
  //   },
  //   {
  //     "id": 8,
  //     "name": "job3",
  //     "parentid": 7,
  //     "chainJob": "HKACLAMC;LA",
  //     "index": 2,
  //     "external": false,
  //     "children": null
  //   },
  //   {
  //     "id": 10,
  //     "name": "job6",
  //     "parentid": 8,
  //     "chainJob": "HKACLAMC;LA",
  //     "index": 3,
  //     "external": false,
  //     "children": null
  //   },
  //   {
  //     "id": 9,
  //     "name": "job4",
  //     "parentid": 6,
  //     "chainJob": "NEFCKS VKJNVW",
  //     "index": 1,
  //     "external": false,
  //     "children": null
  //   },
  //   {
  //     "id": 10,
  //     "name": "job6",
  //     "parentid": 9,
  //     "chainJob": "ASDLJBCJNDS CMS ",
  //     "index": 2,
  //     "external": false,
  //     "children": null
  //   },
  //   {
  //     "id": 6,
  //     "name": "job1",
  //     "parentid": 0,
  //     "chainJob": "MDKSC KSJ DVKJNKJSN",
  //     "index": 1,
  //     "external": false,
  //     "children": null
  //   }
  // ]
  // recursive: boolean = false;
  // levels = new Map<GameNode, number>();
  // treeControl: NestedTreeControl<GameNode>;

  // dataSource: MatTreeNestedDataSource<GameNode>;

  // constructor(private changeDetectorRef: ChangeDetectorRef) {
  
  //   this.treeControl = new NestedTreeControl<GameNode>(this.getChildren);
  //   this.dataSource = new MatTreeNestedDataSource();
  //   this.dataSource.data = TREE_DATA;
  // }

  // getChildren = (node: GameNode) => {
  //   return node.children;
  // };

  // hasChildren = (index: number, node: GameNode) => {
  //   return node.children.value.length > 0;
  // }

}
