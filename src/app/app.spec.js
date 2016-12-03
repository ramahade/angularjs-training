describe('AppController', function () {
    var $controller, appController, $scope;

    beforeEach(module('training.angularjs'));
    beforeEach(module('ui.router'));
    beforeEach(module('ui.bootstrap'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        appController = $controller('AppController', {$scope: $scope});
    }));

    it('should pass a dummy test', inject(function () {
        expect(appController).toBeTruthy();
    }));
});
