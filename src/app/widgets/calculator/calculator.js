/**
 * Created by rajmahad on 12/5/2016.
 */
(function () {
    angular.module("training.angularjs.calculator", [
        "templates-app"
    ])
        .directive("taCalculator", [calculatorDirective]);
    function calculatorDirective() {
        var directive = {
            link: link,
            restrict: "EA",//Default : EA, All options EAC(M)
            controller: [CalculatorController],
            controllerAs: "calculator",
            scope: {
                title: "@"//Options -> "=", "@", "&"
            },
            bindToController: true,
            templateUrl: "widgets/calculator/calculator.tpl.html"
        };
        return directive;

        function link($scope, attrs, ele) {
            //Do any initialization of DOM
        }
    }

    function CalculatorController() {
        var me = this;
        me.left = me.right = me.result = null;
        me.operator = "+";
        me.calculate = calculate;
        me.calculatedResult = calculatedResult;

        function calculate() {
            me.result = null;
            if (!me.left || !me.right) {
                return;
            }
            switch (me.operator) {
                case "+":
                    me.result = parseInt(me.left) + parseInt(me.right);
                    break;
                case "-":
                    me.result = parseInt(me.left) - parseInt(me.right);
                    break;
                case "*":
                    me.result = parseInt(me.left) * parseInt(me.right);
                    break;
                case "/":
                    me.result = parseInt(me.left) / parseInt(me.right);
                    break;
            }
        }

        function calculatedResult() {
            calculate();
            return me.result;
        }
    }

}());