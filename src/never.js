var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NeverError = /** @class */ (function (_super) {
    __extends(NeverError, _super);
    // если дело дойдет до вызова конструктора с параметром - ts выдаст ошибку
    function NeverError(value) {
        return _super.call(this, "Unreachable statement: ".concat(value)) || this;
    }
    return NeverError;
}(Error));
function ThePowerOfNeverType() {
    // type AdminAction is declared somewhere else
    // Variant 1:
    // type AdminAction = "CREATE" | "ACTIVATE";
    // throw new Error("it should not happened");
    var ActionEngine = /** @class */ (function () {
        function ActionEngine() {
        }
        ActionEngine.prototype.doAction = function (action) {
            switch (action) {
                case "CREATE":
                    console.log("CREATE");
                    return "CREATED";
                case "ACTIVATE":
                    console.log("ACTIVATE");
                    return "ACTIVATED";
                default:
                    // Var 1:  => error during runtime
                    throw new Error("Этого не должно случиться");
                // Var 2:
                // throw new NeverError(action);  => Error dirung compilation
                // or
                // const unknownAction: never = action;
            }
        };
        return ActionEngine;
    }());
    var a1 = new ActionEngine();
    a1.doAction("BLOCKED");
}
function duplicate(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        arr.push(arr[i]);
    }
    return arr;
}
var a = [1, 2, 3, 4, 5];
duplicate(a);
console.log(a);
function test2(a, b, c) {
    console.log(a, b, c);
}
