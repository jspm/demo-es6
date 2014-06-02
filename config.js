System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "https://npm.jspm.io/*.js",
    "github:*": "https://github.jspm.io/*.js"
  }
});

System.config({
  "map": {
    "jquery": "github:components/jquery@^2.0.3"
  }
});

System.config({
  "versions": {
    "github:components/jquery": "2.1.0"
  }
});

