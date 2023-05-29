import { Component } from '@angular/core';
import { doc, setDoc, getDoc} from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environments } from 'src/environments/environments';
import { Router } from '@angular/router';

declare const window: any;

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent {
  constructor(private router: Router){
   
  }

  showMessage() {
    window.alert('Your order was successful');
  }  

  
  public async  getData(){
    this.showMessage();

    console.log("am intrat in functie");
    const app = initializeApp(environments.firebase);
    const db = getFirestore(app);
      
    const docRef = doc(db, "comenzi", "comenzi");
    const docSnap = await getDoc(docRef);

    this.router.navigateByUrl('/cart-page');

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

console.log("functie gata");

const nume = (document.getElementById('name') as HTMLInputElement).value;
const adresa = (document.getElementById('address') as HTMLInputElement).value;
const telefon = (document.getElementById('phone') as HTMLInputElement).value;

await setDoc(doc(db, "comanda+", nume), {
  name: nume,
  address: adresa,
  phone: telefon,
  
  });
  }

}

