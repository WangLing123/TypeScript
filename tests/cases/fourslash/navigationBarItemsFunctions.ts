/// <reference path="fourslash.ts"/>

////{| "itemName": "<global>", "kind": "module" |}
////
////{| "itemName": "foo", "kind": "function" |}function foo() {
////    var x = 10;
////    {| "itemName": "bar", "kind": "function", "parentName": "foo" |}function bar() {
////        var y = 10;
////        {| "itemName": "biz", "kind": "function", "parentName": "bar" |}function biz() {
////            var z = 10;
////        }
////    }
////}
////
////{| "itemName": "baz", "kind": "function", "parentName": "<global>" |}function baz() {
////    var v = 10;
////}

test.markers().forEach((marker) => {
    verify.navigationBarContains(marker.data.itemName, marker.data.kind, marker.fileName, marker.data.parentName);
});

verify.navigationBarCount(11); // Includes many nested functions, with duplications as they appear both at top-level and as childItems
