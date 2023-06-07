import { Component } from '@angular/core';
import { ElaborationService } from 'src/app/services/elaboration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simo-test';

  constructor(public ElabServ: ElaborationService){
    const arrayOfNumbers = ElabServ.fromStringToArrayOfNumbers('2 pippo 3 4 A 10');
    console.log('Array Of Numbers: ' + arrayOfNumbers);

    const numbers = [2, 5, 100, -20, 8];
    const arrayOfData = ElabServ.filterAnomalies(numbers, 10, -10);
    console.log('Array filtrato: ' + arrayOfData);
  }

}
