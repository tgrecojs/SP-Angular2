var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'Thomas Greco';
    }
    UserComponent = __decorate([
        angular2_1.Component({
            selector: 'user-name'
        }),
        angular2_1.View({
            template: '<h1>My name is {{ name }}</h1>'
        })
    ], UserComponent);
    return UserComponent;
})();
angular2_1.bootstrap(UserComponent);
