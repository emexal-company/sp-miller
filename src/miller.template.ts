import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Miller } from './miller.component';

export default function standardTemplate(this: Miller) {
    
return html`
<div class="spectrum-MillerColumns">
  <div class="spectrum-MillerColumns-item">
    <slot></slot>
  </div>
</div>
   `;
}
