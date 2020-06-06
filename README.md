![Build|Test|Deploy](https://github.com/martinboykov/frontend-style-guide/workflows/Build|Test|Deploy/badge.svg)

# FrontendStyleGuide

#### Demo: <a href="https://martinboykov.github.io/frontend-style-guide" target="_blank">https://martinboykov.github.io/frontend-style-guide</a>

### Technologies used:
* Angular v.9
* Primeng
* Prismjs

### Build-Process:

1. Install dependencies for frontend with `npm install`
2. For developer environment run `ng serve`
3. For production environment run `ng build`
4. For deployment in github pages run `ng deploy`
   - edit the `deploy` configuration in `angular.json` width your data

5. There is CI/CD configuration file at .github/workflows/gh-action.yaml, which is testing, building and deploying the app in windows, linux and macOs on every push and pull-request from/to master branch.
