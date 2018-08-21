'use strict';

angular.module('seaturtleApp')

		// controller for scrolling to the top
		.controller('ScrollCtrl', ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
			
			// scroll to the top
			$scope.backToTop = function () {
				$anchorScroll();
			};
			
		}])

		// controller for Navbar buttons
		.controller('NavbarBtnCtrl', function($scope, $state) {
	
			// set default active state to home
			$scope.active = $state.current.name;
	
			// function to set active state
			$scope.setActive = function(type) {
				$scope.active = type;
			};
	
			// function to determine active state
			$scope.isActive = function(type) {
				return type === $scope.active;
			};
	
		})

		// controller for progress table
		.controller('ProgressCtrl', function ($scope) {
	
			// progress report section
			$scope.milestones = [{
				task: "1.1", date: "06/2018", milestone: "Meet with GARFO to coordinate on joint GARFO-NEFSC efforts to create rasters of commercial fishing effort.", percent: 100, type: "info" 
			}, {
				task: "1.2", date: "06/2019", milestone: "Complete preparation of commercial fishing effort raster layers (for case study and other possible fisheries).", percent: 0, type: "info" 				
			}, {
 				task: "1.3", date: "01/2019", milestone: "Meet with NEFSC bycatch folks and UMass Dartmouth to discuss bycatch plan.", percent: 0, type: "info"
			}, {               
  				task: "1.4", date: "03/2020", milestone: "Submit to Center review a manuscript describing the spatial-temporal overlap analysis.", percent: 0, type: "info"
			}, {                  
  		        task: "2.1", date: "03/2019", milestone: "Coordinate with GFDL on the assembly of relevant IPCC projections.", percent: 0, type: "info" 
			}, {
				task: "2.2", date: "06/2020", milestone: "Complete component that models loggerhead density in relation to SST and depth.", percent: 0, type: "info" 				
			}, {
 				task: "2.3", date: "09/2020", milestone: "Submit to Center review a manuscript using climate change scenarios to project loggerhead turtle distributions in the U. S. mid-Atlantic.", percent: 0, type: "info"
            }, {
				task: "3.1", date: "07/2018", milestone: "Complete R Shiny application for track reconstruction using a CTCRW model as described in Winton et al. (2018).  Still need to perform testing.", percent: 100, type: "info" 
			}, {
				task: "3.2", date: "12/2018", milestone: "Using the developed R Shiny app, filter 166 satellite tags deployed on large juvenile and adult loggerheads from 2009-2017.", percent: 0, type: "info" 				
			}, {
 				task: "3.3", date: "04/2019", milestone: "R Shiny application for track reconstruction active on a NMFS website.", percent: 0, type: "info"
			}, {               
  				task: "3.4", date: "09/2020", milestone: "Prepare a NMFS webpage which dynamically illustrates climate change scenarios and projected loggerhead distribution.  Webpage to go live when related manuscript published.", percent: 0, type: "info"
            }];
	
		});
