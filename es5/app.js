function ExampleComponent () {
	this.name = 'Tom Greco'
};

ExampleComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: 'user-name'
    }),
    new angular.ViewAnnotation({
        template: '<h1>My name is {{ name }}</h1>'
    })

];
