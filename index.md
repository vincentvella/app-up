# AppUp

[![codecov](https://codecov.io/gh/vincentvella/app-up/branch/master/graph/badge.svg)](https://codecov.io/gh/vincentvella/app-up)

[![vincentvella](https://circleci.com/gh/vincentvella/app-up.svg?style=svg)](https://app.circleci.com/pipelines/github/vincentvella/app-up)

AppUp's service is easy to connect to from any frontend service but we have a few built-in solutions prepared:

# React/React Native/Expo

There's several different examples how to connect to the service currently on my [Github](https://github.com/vincentvella/app-up/tree/master/packages/example/src).

## Installation

```bash
npm install @app-up/react-native
```

```bash
yarn add @app-up/react-native
```

## React Hook  [🔗](https://github.com/vincentvella/app-up/blob/master/packages/example/src/functional-component.tsx)

Functional Component Example

```jsx
const Functional = () => {
  const { loading, data } = useAppUp(<YOUR_KEY_HERE>, Platform.OS, <CURRENT_APP_VERSION>);
  return ...;
};
```

[Arguments (in order)](https://www.notion.so/cd31f2e1654d4aa8983524787ba211ac)

## Higher Order Component [🔗](https://github.com/vincentvella/app-up/blob/master/packages/example/src/class-component.tsx)

HOC Wrapped Class Component Example

```jsx
class Component extends React.Component {
	render () {
    const { loading, data } = this.props;
    return ...;
  }
};

export default withAppUp(
  <YOUR_KEY_HERE>,
  Platform.OS,
  <CURRENT_APP_VERSION>
)(Component);
```

### Arguments (same as above)

## Not using React? [🔗](https://github.com/vincentvella/app-up/blob/master/packages/example/src/custom-component.tsx)

You can use the @app-up/network package to connect directly to the service without the use of a react-specific component.

## Installation

```bash
npm install @app-up/network
```

```bash
yarn add @app-up/network
```

## License
MIT
