jspm ES6 demo
---

This demo project demonstrates the standard jspm workflows:

1. Write ES6 modules and load external modules from CDN
   * Clone this repo, and open `test.html`.
   * This HTML file runs `jspm.import('~/app/main')`.
   * We are dynamically loading jQuery from CDN and running an ES6 module load.
   * See [`app/main.js`](https://github.com/jspm/demo-es6/blob/master/app/main.js) and [`app/myclass.js`](https://github.com/jspm/demo-es6/blob/master/app/my-class.js) for the ES6 module files being loaded dynamically in the browser.

2. Install external modules locally instead of using CDN versions
   * Install jspm: `npm install jspm jspm-github -g`.
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
* Bundling tools for ES6 will soon be available.
* SPDY is a good option for bundling due to fine-grained caching.
* If loading application code to Github, it can be served with SPDY from the jspm CDN simply with `jspm.import('github:my/repo')`
* The same loop as above can then happen for this application code being used as an external module in other projects.

[https://jspm.io](https://jspm.io)
* [jspm Loader](https://github.com/jspm/jspm-loader)
* [jspm Registry & CDN](https://github.com/jspm/registry)
* [jspm CLI](https://github.com/jspm/jspm-cli)
