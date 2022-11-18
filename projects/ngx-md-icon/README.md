# ngx-md-icon
[![npm](https://img.shields.io/npm/v/ngx-md-icon.svg)](https://www.npmjs.com/package/ngx-md-icon)
[![npm](https://img.shields.io/npm/dm/ngx-md-icon.svg)](https://www.npmjs.com/package/ngx-md-icon)
[![npm](https://img.shields.io/librariesio/release/npm/ngx-md-icon)](https://www.npmjs.com/package/ngx-md-icon)

### Easily use Material Design Icons @mdi/js with Angular

[https://materialdesignicons.com/](https://materialdesignicons.com/)

```sh
# Install the Angular component
npm i -S ngx-md-icon

# Install the js icon package
npm i -S @mdi/js
```

### <a href="https://btxtiger.github.io/ngx-md-icon/" target="_blank">⇨ DEMO</a>

### Browse icons

To find your required icon, it is recommendable to use this browser extension,
as it has a lot better performance than the website.<br>
[https://github.com/Pictogrammers/Browser-Icon-Picker](https://github.com/Pictogrammers/Browser-Icon-Picker)

### Basic recommended usage

In order to easily benefit from tree shaking, this library uses the `@mdi/js` icons.
This decision makes it also much easier to create your own application based icon mapping.

Create your global icon library for your app
e.g. `src/core/icons.ts` with the following schema:

```ts
import { mdiForklift, mdiSlashForward } from '@mdi/js';

export const APP_ICONS = {
   industryVehicle: mdiForklift,
   strike: mdiSlashForward,
};
```

Now import the icons in your component.

```ts
import { Component } from '@angular/core';
import { APP_ICONS } from '../../core/icons';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   public icons = APP_ICONS;
}
```

```html
// Single icon
<md-icon [icon]="icons.industryVehicle"></md-icon>

// Stack multiple icons
<md-icon [icons]="[icons.industryVehicle, icons.strike]"></md-icon>

// Text
<md-icon [texts]="['CocaCola']" [xViewBox]="80" [yViewBox]="48" [yTextPos]="29"></md-icon>
<md-icon [texts]="['EK']" [icon]="icons.person" class="person-overlay"></md-icon>
```

### Usage with Angular Material

The component works out of the box with Angular Material. In order to preserve compatibility, the icon also gets
the `.mat-icon` class attached.
However, it is required to apply a bugfix for this open issue, to properly center the icon in the button.<br>
Read more: [https://github.com/angular/components/issues/18401](https://github.com/angular/components/issues/18401)

```scss
// global.scss

// Fix mat-icon-button icon not centered
.mat-icon-button .mat-button-wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
}
```

```html
<button mat-icon-button>
   <md-icon [icons]="[icons.industryVehicle, icons.strike]"></md-icon>
</button>
```

### Styling
Each icon/path inside an icon stack has a unique reference. Let's create a red stroked blue forklift icon.
```html
<md-icon [icons]="[icons.industryVehicle, icons.strike]" 
         class="stroked-forklift"></md-icon>
```
```scss
.stroked-forklift {
   ::ng-deep {
      .icon-0 {
         color: blue;
      }
      .icon-1 {
         transform: scale(1.5);
         transform-origin: center;
         color: red;
      }  
   }
}
```
