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
  
  constructor(private firestore: AngularFirestore) {
      this.itemCollection = firestore.collection<any>('drink');
      this.items = this.itemCollection.valueChanges();
    }  
  ngOnInit() {
  }

}
