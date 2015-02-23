jspm ES6 demo
---

This demo project demonstrates an ES6 jspm workflow:

1. Write ES6 modules and load external modules from CDN
   * Clone this repo, and open `test.html`.
   * This HTML file runs `System.import('app/main')`.
   * We are dynamically loading jQuery from CDN and loading the `app/main` ES6 module.
   * `paths` in `config.js` tells the loader that `app/*` can be found in `lib/`, so [`lib/main.js`](https://github.com/jspm/demo-es6/blob/master/lib/main.js) and [`lib/myclass.js`](https://github.com/jspm/demo-es6/blob/master/lib/my-class.js) are the ES6 module files being loaded dynamically in the browser.

2. Install external modules locally instead of using CDN versions
   * Install jspm: `npm install jspm -g`.
   * In the repo, run `jspm install`.
   * With no arguments, dependencies are installed from the package.json. We could also do `jspm install jquery` for example.
   * Run `jspm setmode local`, then open `test.html`.
   * We are now loading jQuery from the locally installed version, no other configuration or code changes being necessary for this switch.

3. Bundle into a single file for production
   * Run `jspm bundle app/main --inject`.
   * This creates a file `build.js` containing all dependencies needed for `app/main` to run.
   * `--inject` adds the bundle definition to `config.js`; the appropriate bundle is then loaded automatically when a module is requested from it.
   * We could alternatively use `<script src="build.js"></script>` after SystemJS but before the import.
   * All code is now loaded fully compiled from the single bundle.

[https://jspm.io](https://jspm.io)
* [jspm CLI](https://github.com/jspm/jspm-cli)
* [jspm Registry & CDN](https://github.com/jspm/registry)
* [SystemJS Loader](https://github.com/systemjs/systemjs)
