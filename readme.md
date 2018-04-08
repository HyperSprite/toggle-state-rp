# Toggle State Render Props Component

Handles the toggle state for its children

Returned props:

* toggle:  true || false
* handleClose: function, always sets toggle to false
* handleOpen: function, always sets toggle to true
* handleToggle: function, toggles last value

### Install
```npm install --save @hypersprite/toggle-state-rp```

### Import
```import OpenState from '@hypersprite/toggle-state-rp';```

## Usage
Place child component inside function return and use the parameters.

```js
<OpenState
  render={toggleStateRP => (
    <DialogMessage
      {...toggleStateRP}
      otherProp={this.props.otherPropsOne}
    />
  )}
/>
```

> This example assumes a dialog component with some buttons inside looking for "toggle" and some handler functions

## Testing and Deployment

* Testing includes Jest testing with Enzyme for mounting and rendering and Instamatic for coverage reporting.
* Linting provided by ESlint with AirBnB presets.
* Modern JavaScript and JSX via babel.
* Git pre-commit hooks to keep everyone honest.

### Setup
```bash
git clone https://github.com/HyperSprite/toggle-state-rp.git
cd toggle-state-rp
npm install
```

### Adding package to local app for development

npm uses the package name for the module directory placement, not the folder name or repo name, even though they are usually the same.
Open package.json and check the name, in this case:
  "name": "@hypersprite/toggle-state-rp",

Assuming you have a flat folder structure:

Run link from inside your working app
```bash
npm link ../toggle-state-rp
```

If you look in node_modules, you will now see a directory called ```@hypersprite``` with a sub directory ```toggle-state-rp```

You can use your local version inside your app as if it was a published module
```js
import OpenStateRP from '@hypersprite/toggle-state-rp';
```

If you run install or update on your working app, you will need to rerun the link command. If you are doing this a lot, you could make an npm script for it in your package.json to run after installs, something like:

package.json
```json
"scripts": {
  "localmodules": "npm link ../toggle-state-rp && npm link ../some-other-local-project"
}
```

> This will not work if you need to run sudo to to install npm modules, [see this article here](see this http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears) if you need help fixing that .


## Testing

Testing provided by Jest, Enzyme and coverage report by Istanbul

* ```npm test``` Runs all tests.
* ```npm run test:dev``` only runs the tests in src in watch mode.

## Add+Commit, Version

> The branch must be clean to version and publish

* Add
* Commit, which will:
 * Run linting and tests with pre-commit hooks.

```bash
git commit -am 'some totally useful comment'
```

Next, we need to Version:

> Note: An initial publish needs a little setup before ```npm version``` will work.

```bash
// manually build your dst
npm run build
// publish your module
// --access public if this is a scoped module and you want it public
npm publish --access public
// delete dst folder
rm -rf dst
```

* version, which will:
 * Rerun linting and tests
 * Updates the package.json version numnber based on Major, Minor and Patch
 * Git add package.json using the version number as the commit message
 * Push the changes to Github
 * Transpile the JSX to ES5 with babel into the dst/ directory
 * Publish to npm
 * Delete the dst directory

```bash   
npm version <major | minor | patch>
```
