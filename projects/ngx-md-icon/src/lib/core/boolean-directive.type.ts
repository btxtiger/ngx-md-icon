/**
 * Type for Angular boolean directives, e.g.
 * <ui-badge compact></ui-badge>
 *
 * Alternative forms:
 * <ui-badge compact="true"></ui-badge>
 * <ui-badge compact="false"></ui-badge>
 * <ui-badge [compact]="true"></ui-badge>
 * <ui-badge [compact]="false"></ui-badge>
 */
export type BooleanDirectiveType = undefined | boolean | 'true' | 'false' | '';

/**
 * Convert value of BooleanDirectiveType into strict boolean
 */
export function BooleanDirectiveValue(value: BooleanDirectiveType): boolean {
   switch (value) {
      case 'true':
         return true;
      case 'false':
         return false;
      case '':
         return true;
      case true:
         return true;
      case false:
         return false;
      case undefined:
         return false;
      case null:
         return false;
      default:
         return false;
   }
}
