'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;


		// default location
		var location = new google.maps.LatLng(32.7765656, -79.93092159);

		// map object
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: location
		});

		// find latlong
		var geocoder = new google.maps.Geocoder();


		$scope.updateLocation = function() {
			geocoder.geocode({'address': $scope.searchText}, function (response) {
				map.setCenter(response[0].geometry.location);
			});
		};

		//var marker = new google.maps.Marker({
		//	position: center,
		//	map: map,
		//	title: ''
		//});

	}
]);
