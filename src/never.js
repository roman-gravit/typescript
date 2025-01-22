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
// Factory
if (true) {
    var BalletShoe_1 = /** @class */ (function () {
        function BalletShoe() {
            this.purpose = "dancing";
        }
        return BalletShoe;
    }());
    var Boot_1 = /** @class */ (function () {
        function Boot() {
            this.purpose = "woodcutting";
        }
        return Boot;
    }());
    var Sneaker_1 = /** @class */ (function () {
        function Sneaker() {
            this.purpose = "walking";
        }
        return Sneaker;
    }());
    var Shoe = {
        create: function (type) {
            switch (type) {
                case "ballet":
                    return new BalletShoe_1();
                case "sneaker":
                    return new Sneaker_1();
                case "boots":
                    return new Boot_1();
                default:
                    throw new Error("uknown type");
            }
        }
    };
    var shoe1 = Shoe.create("ballet");
    var shoe2 = Shoe.create("sneaker");
    var shoe3 = Shoe.create("boots");
}
// Private - Protected constructor
if (false) {
    var A_Private = /** @class */ (function () {
        function A_Private() {
        }
        return A_Private;
    }());
    // @ts-expect-error
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return B;
    }(A_Private));
    // @ts-expect-error
    new A_Private();
    // @ts-expect-error
    new B();
    var A_Protected = /** @class */ (function () {
        function A_Protected() {
        }
        return A_Protected;
    }());
    var B1 = /** @class */ (function (_super) {
        __extends(B1, _super);
        function B1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return B1;
    }(A_Protected));
    // @ts-expect-error
    new A_Protected();
    // @ts-expect-error
    new B1();
}
if (false) {
    TEST(is("string", "other"), false);
    TEST(is(true, false), false);
    TEST(is(42, 42), true);
    TEST(is(42, 42, 22), false);
    TEST(is(42, 42, 42), true);
    // @ts-expect-error
    TEST(is(10, "foo"), false);
    TEST(is([1], [1, 2], [1, 2, 3]), false);
    function is(param) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return rest.every(function (elem) { return elem === param; });
    }
}
// call
if (false) {
    function call(f) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return f.apply(void 0, args);
    }
    console.log(call(add, "a", "v"));
    console.log(call(add2, 2, "a"));
    function add(a, b) {
        return a + b;
    }
    function add2(a, b) {
        return String(a) + b;
    }
}
// function overload
if (false) {
    var reserve = function (from, to, destination) {
        if (typeof from === "string" && to === undefined && destination === undefined) {
            console.log("Only destination ", from, to, destination);
        }
        else if (to instanceof Date && destination !== undefined) {
            console.log("All 3 parameters", from, to, destination);
        }
        else if (destination === undefined) {
            console.log("To is missed", from, to, destination);
        }
    };
    console.log(reserve(new Date(), new Date(), "Bali"));
    console.log(reserve(new Date(), "Bali"));
    console.log(reserve("Bali"));
    function reserve2(from, to, destination) {
        console.log("2: ", from, to, destination);
        return {};
    }
    console.log(reserve2(new Date(), new Date(), "Bali"));
    console.log(reserve2(new Date(), undefined, "Bali"));
}
// map
if (false) {
    var test1 = function (array, func) {
        var result = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            result.push(func(item));
        }
        return result;
    };
    var itemsN = [1, 2, 3, 4, 5, 6, 7, 8];
    function map1(num) {
        return num + 1;
    }
    function map2(num) {
        return String(num);
    }
    var itemsS = ["a", "ab", "b", "aaa"];
    function map3(s) {
        return s.toUpperCase();
    }
    console.log("Map1:", test1(itemsN, map1));
    console.log("Map2:", test1(itemsN, map2));
    console.log("Map3:", test1(itemsS, map3));
}
// filter 
if (false) {
    var test1 = function (array, func) {
        var result = [];
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var item = array_2[_i];
            var predicate = func(item);
            if (predicate) {
                result.push(item);
            }
        }
        return result;
    };
    var itemsN = [1, 2, 3, 4, 5, 6, 7, 8];
    function predicateN(num) {
        return num % 2 === 0;
    }
    var itemsS = ["a", "ab", "b", "aaa"];
    function predicateS(s) {
        return s.startsWith("a");
    }
    console.log("Filter1:", test1(itemsN, predicateN));
    console.log("Filter2:", test1(itemsS, predicateS));
}
function TEST(result, tested) {
    console.log(result === tested ? "+" : "Failed");
}
