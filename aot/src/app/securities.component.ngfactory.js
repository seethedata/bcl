/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './securities.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from './security-detail.component.ngfactory';
import * as i4 from '../../../src/app/security-detail.component';
import * as i5 from '../../../src/app/securities.component';
import * as i6 from '../../../src/app/security.service';
import * as i7 from '@angular/http';
var styles_SecuritiesComponent = [i0.styles];
export var RenderType_SecuritiesComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_SecuritiesComponent, data: {} });
function View_SecuritiesComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'button', [['class', 'btn security']], [[2, 'completed', null], [2, 'selected', null]], [[null,
                    'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.onSelect() !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i1.ɵted(null, ['\n			', '\n		'])),
        (_l()(), i1.ɵted(null, ['\n	']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_v.context.$implicit.completed == true);
        var currVal_1 = (_v.context.$implicit == _co.selectedSecurity);
        _ck(_v, 2, 0, currVal_0, currVal_1);
        var currVal_2 = _v.context.$implicit.name;
        _ck(_v, 3, 0, currVal_2);
    });
}
export function View_SecuritiesComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['id', 'security-list']], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SecuritiesComponent_1)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'app-security-detail', [], null, null, null, i3.View_SecurityDetailComponent_0, i3.RenderType_SecurityDetailComponent)), i1.ɵdid(49152, null, 0, i4.SecurityDetailComponent, [], { security: [0, 'security'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.securities;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.selectedSecurity;
        _ck(_v, 7, 0, currVal_1);
    }, null);
}
export function View_SecuritiesComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 2, 'ng-component', [], null, null, null, View_SecuritiesComponent_0, RenderType_SecuritiesComponent)), i1.ɵprd(512, null, i6.SecurityService, i6.SecurityService, [i7.Http]), i1.ɵdid(114688, null, 0, i5.SecuritiesComponent, [i6.SecurityService], null, null)], function (_ck, _v) {
        _ck(_v, 2, 0);
    }, null);
}
export var SecuritiesComponentNgFactory = i1.ɵccf('ng-component', i5.SecuritiesComponent, View_SecuritiesComponent_Host_0, {}, {}, []);
//# sourceMappingURL=securities.component.ngfactory.js.map