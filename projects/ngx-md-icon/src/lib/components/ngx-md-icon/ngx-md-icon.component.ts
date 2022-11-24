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
   public classes = 'md-icon';

   @HostBinding('role')
   public role = 'img';

   @HostBinding('style.width')
   public styleWidth: string | undefined;

   @Input()
   public icon?: string;

   @Input()
   public icons?: string[];

   @Input()
   public texts?: string[];

   @Input()
   public xViewBox: number = 24;

   @Input()
   public yViewBox: number = 24;

   @Input()
   public xTextPos: number = 0;

   @Input()
   public yTextPos: number = 19;

   public renderIcons: string[] = [];

   constructor() {}

   ngOnInit(): void {
      if (!this.icon && !this.icons && !this.texts) {
         console.error('NgxMdIconComponent: Input() [icon] or [icons] or [texts] is required');
      }
      this.init();
   }

   ngOnChanges(changes: SimpleChanges): void {
      if ((changes['icon'] && !changes['icon'].isFirstChange()) || (changes['icons'] && !changes['icons'].isFirstChange())) {
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

      if (this.xViewBox && this.texts?.length) {
         this.styleWidth = this.xViewBox + 'px';
      }

      this.renderIcons = icons;
   }
}
