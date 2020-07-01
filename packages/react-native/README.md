# @app-up/react-native
React Native utility for connecting to the AppUp service

## Installation

NPM:
```sh
npm install @app-up/react-native
```

Yarn:
```sh
yarn add @app-up/react-native
```

## Usage

### Use the hook 
```js
import useAppUp from @app-up/react-native;
import { Platform } from 'react-native';

const Functional = () => {
  const { loading, data } = useAppUp(<YOUR_KEY_HERE>, Platform.OS, <CURRENT_APP_VERSION>);
  return ...;
}
```

## [Example](../example/src/appstore-redirect.tsx)
---
## License
MIT
