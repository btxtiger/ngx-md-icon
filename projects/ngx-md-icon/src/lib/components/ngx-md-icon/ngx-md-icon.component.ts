import {
   ChangeDetectionStrategy,
   Component,
   HostBinding,
   Input,
   OnChanges,
   OnInit,
   SimpleChanges,
   ViewEncapsulation,
} from '@angular/core';

@Component({
   selector: 'md-icon',
   templateUrl: './ngx-md-icon.component.html',
   styleUrls: ['./ngx-md-icon.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None,
})
export class NgxMdIconComponent implements OnInit, OnChanges {
   @HostBinding('class')
   public classes = 'md-icon mat-icon';

   @Input()
   public icon?: string;

   @Input()
   public icons?: string[];

   public renderIcons: string[] = [];

   constructor() {}

   ngOnInit(): void {
      if (!this.icon && !this.icons) {
         console.error('NgxMdIconComponent: Input() [icon] or [icons] is required');
      }
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes['icon'] || changes['icons']) {
         this.init();
      }
   }

   /**
    * Init
    */
   private init(): void {
      const icons = [];

      if (this.icon) {
         icons.push(this.icon);
      }
      if (this.icons?.length) {
         icons.push(...this.icons);
      }

      this.renderIcons = icons;
   }
}
