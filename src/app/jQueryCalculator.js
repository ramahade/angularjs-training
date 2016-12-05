/**
 * Created by rajmahad on 12/5/2016.
 */
(function ($) {
    'use strict';

    var numRegex = /^[0-9]+$/;

    /**
     * When the document is ready execute this section
     */
    $(document).ready(function () {
        $("#jQueryCalculator #calculate").on("click", clickListener);
    });

    function clickListener() {
        var left = getNumFromInput($("#jQueryCalculator #left").find("input")),
            right = getNumFromInput($("#jQueryCalculator #right").find("input")),
            operator = $("#jQueryCalculator #operator").find("select").val(),
            result;

        if (left && right) {
            result = calculate(left, right, operator);
            $("#jQueryCalculator #result").find("input").val(result);
        }
    }

    function getNumFromInput(inputEle) {
        var valid = numRegex.test(inputEle.val());
        $(inputEle).closest(".form-group").toggleClass('has-error', !valid);
        return valid ? parseInt(inputEle.val()) : null;
    }

    function calculate(left, right, operator) {
        var result = null;
        switch (operator) {
            case "+":
                result = left + right;
                break;
            case "-":
                result = left - right;
                break;
            case "*":
                result = left * right;
                break;
            case "/":
                result = left / right;
                break;
        }
        return result;
    }
}(jQuery));