System.config({
  "paths": {
    "app/*": "app-build/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
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

