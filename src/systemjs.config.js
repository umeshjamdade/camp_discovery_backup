/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      "ng2-charts": "node_modules/ng2-charts",

      // other libraries
      'rxjs': 'npm:rxjs',
      'ng2-charts': 'node_modules/ng2-charts',
      'ng2-tagsinput': 'node_modules/ng2-tagsinput',
      'ng2-typeahead':  'node_modules/ng2-typeahead',
      "ngx-popover": "node_modules/ngx-popover",
      'angular2-toaster': 'npm:angular2-toaster/bundles/angular2-toaster.umd.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
          app: {
            defaultExtension: 'js',
            meta: {
              './*.js': {
                loader: 'systemjs-angular-loader.js'
              }
            }
          },
          rxjs: {
            defaultExtension: 'js'
          },
          'ng2-charts': { main: 'ng2-charts.js', defaultExtension: 'js' },
          'ng2-tagsinput': { defaultExtension: 'js', main:'index' },
          'ng2-typeahead': { main: 'ng2-typeahead.js', defaultExtension: 'js' },
          "ngx-popover": { main: "index.js", defaultExtension: "js" }
    },
  });
})(this);
