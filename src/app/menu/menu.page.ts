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

  countcha = 0;
  countcoffee = 0;

  sumpricecha = 0;
  sumpricecoffee = 0;

  count1 = 0;
  num = 0;
  count2 = 0;

  price_cha = 40;
  price_coffee = 35;

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
    this.countcha = this.countcha + this.count1
    this.countcoffee = this.countcoffee + this.count2
    this.sumpricecha = (this.price_cha * this.count1)
    this.sumpricecoffee = (this.price_coffee * this.count2)
    console.log(this.countcha, this.countcoffee)
    console.log("complete")
    const id = "svaeorder"
    const orders = {
      id: id,
      // coffee: this.count1,
      // Chathai: this.count2,
      pricecha: this.sumpricecha,
      pricecoffee: this.sumpricecoffee,
      countcoffee: this.countcoffee,
      countcha: this.countcha,
    }
    this.itemCollection.doc(id).set(orders)
      .then(() => {
        this.count1 = 0;
        this.count2 = 0;
      })
  }
}
