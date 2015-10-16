function UserComponent () {
	this.name = 'Tom Greco'
};

UserComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: 'user-name'
    }),
    new angular.ViewAnnotation({
        template: '<h1>My name is {{ name }}</h1>'
    })

];
