import { __decorate } from "tslib";
import { customElement } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './miller.styles';
import standardTemplate from './miller.template';
let Miller = class Miller extends Base {
    render() {
        return standardTemplate.call(this);
    }
};
Miller.componentStyles = [labelStyles];
Miller = __decorate([
    customElement('sp-miller')
], Miller);
export { Miller };
//# sourceMappingURL=miller.component.js.map