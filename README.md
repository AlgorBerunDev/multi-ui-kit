# Multi UI Kit

A flexible UI Kit solution for React applications.

## Installation

```bash
npm install multi-ui-kit
# or
yarn add multi-ui-kit
```

## Example use

```tsx
import React from 'react';
import { UIKitProvider, Button } from 'multi-ui-kit';

const App = () => {
  return (
    <UIKitProvider kit="antd">
      <Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </UIKitProvider>
  );
};

// Пример с кастомной темой
const customTheme = {
  colors: {
    primary: '#ff0000',
  },
};

const AppWithCustomTheme = () => {
  return (
    <UIKitProvider kit="material" theme={customTheme}>
      <Button variant="primary">Custom Theme Button</Button>
    </UIKitProvider>
  );
};
```
