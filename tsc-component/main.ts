import {Component, View, bootstrap} from 'angular2/angular2';
@Component({
	selector: 'user-name'
})
@View({
	template: '<h1>My name is {{ name }}</h1>'
})
class UserComponent {
	name: 'Thomas Greco'
}
bootstrap(UserComponent);