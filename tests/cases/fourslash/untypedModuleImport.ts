/// <reference path='fourslash.ts' />

// @Filename: node_modules/foo/index.js
////{}

// @Filename: a.ts
////import /*foo*/[|foo|] from /*fooModule*/"foo";
////[|foo|]();

goTo.file("a.ts");
debug.printErrorList();
verify.numberOfErrorsInCurrentFile(0);

goTo.marker("fooModule");
verify.goToDefinitionIs([]);
verify.quickInfoIs('module "foo"');
verify.referencesAre([])

goTo.marker("foo");
verify.goToDefinitionIs([]);
verify.quickInfoIs("import foo");
verify.rangesReferenceEachOther();
