System.config({
  "paths": {
    "*": "*.js",
    "github:*": "https://github.jspm.io/*.js",
    "npm:*": "https://npm.jspm.io/*.js",
    "myendpoint:*": "https://myendpoint.jspm.io/*.js"
  }
});

System.config({
  "map": {
    "jquery": "github:components/jquery@^2.0.3"
  }
});

System.config({
  "versions": {
    "github:components/jquery": "2.1.1"
  }
});

