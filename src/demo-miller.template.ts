import { html } from 'lit-element';
import { DemoMiller } from './demo-miller.component';

import '@spectrum/sp-miller';
import '@spectrum/sp-container';


export default function template(this: DemoMiller) {
  return html`
  <sp-container>
  <sp-rule medium label="Miller Columns (Branches Selectable)"></sp-rule>
  <sp-demo width="350">
  <pre><sp-miller>
 <sp-assetlist label="File 1" ChevronRight></sp-assetlist>
 <sp-assetlist label="File 2" ChevronRight></sp-assetlist>
 <sp-assetlist label="File 3" selected src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" ChevronRight></sp-assetlist>
</sp-miller></pre>
  </sp-demo>
  <sp-demo width="350">
  <pre><sp-miller>
 <sp-assetlist label="File 1" ChevronRight></sp-assetlist>
 <sp-assetlist label="File 2" selected ChevronRight></sp-assetlist>
 <sp-assetlist label="File 3" selected src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" ChevronRight></sp-assetlist>
</sp-miller></pre>
  </sp-demo>
  <sp-rule medium label="Miller Columns (Files Selectable)"></sp-rule>
  <sp-demo width="350">
  <pre><sp-miller>
 <sp-assetlist label="File 1" ChevronRight></sp-assetlist>
 <sp-assetlist label="File 2" ChevronRight></sp-assetlist>
 <sp-assetlist label="File 3" selected src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" ChevronRight></sp-assetlist>
</sp-miller></pre>
  </sp-demo>
  <sp-demo width="350">
  <pre><sp-miller>
 <sp-assetlist label="File 1" ChevronRight></sp-assetlist>
 <sp-assetlist label="File 2" ChevronRight></sp-assetlist>
 <sp-assetlist label="File 3" selected src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" ChevronRight></sp-assetlist>
</sp-miller></pre>
  </sp-demo>
  </sp-container>
  `;
  
}
