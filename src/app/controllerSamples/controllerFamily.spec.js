describe('controllerFamily', function () {
    var $controller, parentController, childController, $scope;

    beforeEach(module('training.angularjs.controllerSamples.controllerFamily'));
    beforeEach(module('ui.router'));
    beforeEach(module('ui.bootstrap'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        parentController = $controller('ControllerSamplesParentController', {$scope: $scope});
        childController = $controller('ControllerSamplesChildController', {$scope: $scope});
    }));

    it('should pass a dummy test', inject(function () {
        expect(parentController).toBeTruthy();
        expect(childController).toBeTruthy();
    }));
});
