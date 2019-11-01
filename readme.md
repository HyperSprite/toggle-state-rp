# Toggle State Render Props Component

Demo [codesandbox.io...](https://codesandbox.io/s/xp91vq473w)

> This is a Render Prop Component, this style of component was introduced by [Michael Jackson](https://twitter.com/mjackson) of [react-router](https://github.com/ReactTraining/react-router) fame.
See [Official React Render Props docs](https://reactjs.org/docs/render-props.html) for more information.

Accepts an initialState and passes as props: a `toggle` boolean state and three functions to update the `toggle` state.

## Usage

### Install
`npm install --save @hypersprite/toggle-state-rp`

### Import
`import ToggleState from '@hypersprite/toggle-state-rp';`

## Usage
Place child component inside function return and use the parameters.

parent-container.jsx
```js
// some place in your component, you need a DialogMessage

    <ToggleState
      initialState
      render={toggleStateRP => (
        <DialogMessage
          {...toggleStateRP}
        />
      )}
    />
```

dialog-message.jsx
```js
const DialogMessage = ({ toggle, handleToggle }) => {
  return (
    <div>
      <p>
        {`Toggle is: ${toggle}`}
      </p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};
```

### API

#### Receives Props

| prop name | type | values | description |
| --------- | ---- | ------ | ----------- |
| initialState | bool | true or false* | Sets initial state ||

#### New Passed Props

| prop name | type | values | description |
| --------- | ---- | ------ | ----------- |
| toggle    | bool | true or false* | The State being toggled |
| handleFalse | function |  | Call to set toggle to **false** |
| handleToggle | function |  | Call to toggle toggle |
| handleTrue | function |  |  Call to set toggle to **true** |
