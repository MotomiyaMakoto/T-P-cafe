import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: any;

  constructor(private firestore: AngularFirestore) {
    this.itemCollection = firestore.collection<any>('drink');
    this.items = this.itemCollection.valueChanges();
  }

  sum_drink:number;

  ngOnInit() {
    console.log(this.items)
  }



}
