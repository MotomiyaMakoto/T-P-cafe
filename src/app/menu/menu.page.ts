import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;
  
  constructor(private firestore: AngularFirestore,) {
    this.itemCollection = firestore.collection<any>('drink');
    this.items = this.itemCollection.valueChanges();
  }
  ngOnInit() {
  }

  sumcha:number;
  sumcoffee:number;

  count1 = 0;
  num = 0;
  count2 = 0;

  minus1() {
    if (this.count1 > 0) {
      this.count1 = this.count1 - 1;
    }
  }
  add1() {
    this.count1 = this.count1 + 1;
  }

 
  minus2() {
    if (this.count2 > 0) {
      this.count2 = this.count2 - 1;
    }
  }
  add2() {
    this.count2 = this.count2 + 1;
  }

  save() {

    console.log("complete")
    const id = "savesave"
    const orders = {

      
      id: id,
      coffee: this.count1,
      Chathai: this.count2,
    }
    this.itemCollection.doc(id).set(orders)
      .then(() => {       
        this.count1 = 0;
        this.count2 = 0;
      })

  }



}
