import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './miller.styles';
import standardTemplate from './miller.template';

@customElement('sp-miller')
export class Miller extends Base {
  public static componentStyles = [labelStyles];

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-miller': Miller;
  }
}
