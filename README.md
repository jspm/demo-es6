jspm ES6 demo
---

This demo project demonstrates the standard jspm workflows:

1. Write ES6 modules and load external modules from CDN
   * Clone this repo, and open `test.html`.
   * This HTML file runs `jspm.import('app/main')`.
   * We are dynamically loading jQuery from CDN and running an ES6 module load.
   * See [`app/main.js`](https://github.com/jspm/demo-es6/blob/master/app/main.js) and [`app/myclass.js`](https://github.com/jspm/demo-es6/blob/master/app/my-class.js) for the ES6 module files being loaded dynamically in the browser.

2. Install external modules locally instead of using CDN versions
   * Install jspm: `npm install jspm -g`.
   * In the repo, run `jspm install`.
   * With no arguments, dependencies are installed from the package.json. We could also do `jspm install jquery` for example.
   * Run `jspm setmode local`, then open `test.html`.
   * We are now loading jQuery from the locall installed version, no other configuration or code changes being necessary for this switch.

3. Build ES6 modules into ES5, transpiling into AMD with source maps
   * Run `jspm build`.
   * The ES6 modules in `app` are now transpiled into ES5 with AMD in the folder `app-build`.
   * Run `jspm setmode production`, then open `test.html`.
   * All module code is now loaded without browser compilation ready for production.

The only thing left out here is bundling:
* The separate AMD files can be [compiled with the r.js optimizer](https://github.com/systemjs/systemjs#building-amd-modules-into-a-single-file).
* Hosting an app on GitHub or NPM, it can be served over SPDY with fine-grained caching, which can often be suitable for production.
* ES6-specific bundling workflows are in development.

[https://jspm.io](https://jspm.io)
* [jspm CLI](https://github.com/jspm/jspm-cli)
* [jspm Registry & CDN](https://github.com/jspm/registry)
* [SystemJS Loader](https://github.com/systemjs/systemjs)
