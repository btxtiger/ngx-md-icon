import {Component} from '@angular/core';
import {APP_ICONS} from "./ICONS";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   public icons = APP_ICONS;
}
