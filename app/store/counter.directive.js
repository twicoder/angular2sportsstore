"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CounterDirective = /** @class */ (function () {
    function CounterDirective(container, tempalte) {
        this.container = container;
        this.tempalte = tempalte;
    }
    CounterDirective.prototype.ngOnChanges = function (changes) {
        this.container.clear();
        for (var i = 0; i < this.counter; i++) {
            this.tempalte.createEmbeddedView(new CounterDirectiveContext(i + 1));
            // this.tempalte.createEmbeddedView(this.template,
            //     new CounterDirectiveContext(i+1));
        }
    };
    __decorate([
        core_1.Input("counterOf"),
        __metadata("design:type", Number)
    ], CounterDirective.prototype, "counter", void 0);
    CounterDirective = __decorate([
        core_1.Directive({
            selector: "[counterOf]"
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.TemplateRef])
    ], CounterDirective);
    return CounterDirective;
}());
exports.CounterDirective = CounterDirective;
var CounterDirectiveContext = /** @class */ (function () {
    function CounterDirectiveContext($implicit) {
        this.$implicit = $implicit;
    }
    return CounterDirectiveContext;
}());
