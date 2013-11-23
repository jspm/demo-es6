jspm ES6 demo
---

1. Clone this repo, and open `test.html`.
   We are dynamically loading jQuery from CDN and running an ES6 module load.

2. Install jspm: `npm install jspm jspm-github -g`

3. In the repo, run `jspm install`
   This installs all external module dependencies to the local system

4. Run `jspm setmode local`, then open `test.html`
   We are now loading jQuery from the locally installed version in `jspm_packages`, no network connection is required anymore.

5. Run `jspm build`
   The ES6 module is now transpiled into ES5 with AMD in the folder `app-build`.

6. Run `jspm setmode production`, then open `test.html`
   All module code is now loaded as minified and transpiled ES5 in the browser.



[https://jspm.io](https://jspm.io)
* [jspm Loader](https://github.com/jspm/jspm-loader)
* [jspm Registry & CDN](https://github.com/jspm/registry)
* [jspm CLI](https://github.com/jspm/jspm-cli)