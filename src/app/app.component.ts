import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavigationComponent]
})
export class AppComponent {

  // TODO: 
  // 1- Make all components standalone
  // 2- Add also alpha and gamma examples to the orientation component
}
