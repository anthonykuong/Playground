import {Component} from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

export interface PostalAddress {
  type: string;
  address: string;
  province?: string;
}

@Component({
  selector: 'app-root',
  template: `<div>
               Cheque Image 
                  <div class="address">
                  <p *ngFor="let test of filteredAddressItems$ | async">Address: {{test.address}}</p>
                  </div>
              </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*** address filter out type of 'Mailing' */
  public backendCallResult$ =  of(
    [
      {type: "Resedential Physical",
        address: "123 Park"
      },
      {type: "Resedential Physical",
        address: "569 Hill"
      },
      {type: "Mailing",
        address: "639 Mount"
      },
    ]
  );

  public filteredAddressItems$ =
    this.backendCallResult$.pipe (
      map(items =>
        items.filter(item => item.type === "Mailing"
        )
      )
    );


}
