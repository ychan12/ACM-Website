var fs = require('fs')
var app = angular.module('ACM', []);

app.controller('officerController', function($scope){
	$scope.officers = [
		{name: 'Christopher Anderson', title: 'President', email: 'andersonchris90@gmail.com', picture: './assets/president.jpg'},
		{name: 'Jonathan Sahagun', title: 'Vice President', email: 'JonathanSahagun93@gmail.com', picture: './assets/vicepresident.jpg'},
		{name: 'Andrew Garcia', title: 'Secretary', email: 'MattGarcia94@sbcglobal.net', picture: './assets/secretary.jpg'},
		{name: 'Zolangi Ramirez', title: 'Treasurer', email: 'ZolangiRamirez@gmail.com', picture: './assets/treasurer.jpg'},
		{name: 'Andrew Ahn', title: 'Web Master', email: 'ahnman341@gmail.com', picture: './assets/webmaster.jpg'}];
});

app.controller('minutesController', function($scope){
	$scope.
});

/*
zoe
	favorite programming language:  java
	favorite computer science topic:  no idea
	employment status:  CSULA Department of Mechanical Engineering




*/