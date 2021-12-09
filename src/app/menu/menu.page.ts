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



  count1 = 0; //กาแฟ
  count2 = 0;//ชา

  sumcha = 0;
  sumcofe = 0;

  sumprice = 0;

  save() {
    // this.sumcha = this.sumcha + (this.count2 * 40);
    // console.log(this.sumcha,this.countcha)
    this.countcha = this.countcha + this.count1
    this.countcoffee = this.countcoffee + this.count2
    this.sumcha = this.sumcha + (this.count2 * 40);
    this.sumcofe = this.sumcofe + (this.count1 * 35);
    this.sumprice = this.sumprice + (this.sumcha + this.sumcofe)
    console.log(this.sumcha)
    console.log("complete")
    const id = "svaeorder"
    const orders = {
      id: id,
      testcah: this.sumcha,
      coffee_count: this.countcoffee,
      coffee_price: this.sumcofe,
      cha_count: this.countcha,
      cha_price: this.sumcha,
      sum_price: this.sumprice
    }
    this.itemCollection.doc(id).set(orders)
      .then(() => {
        this.count1 = 0;
        this.count2 = 0;
      })
  }
}
