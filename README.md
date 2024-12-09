# VerificationCodeInput Component

A reusable React component for entering verification codes. This component is designed to handle input boxes for numeric or alphanumeric verification codes, with support for customizable length and callback functionality.

---

## Installation

Install the component using npm or yarn:

```bash
npm install verification-code-input-react
```

or

```bash
yarn add verification-code-input-react
```

---

## Usage

Here’s an example of how to use the `VerificationCodeInput` component:

```tsx
import React from "react";
import VerificationCodeInput from "verification-code-input-react";

function App() {
    const handleComplete = (code: string) => {
        console.log("Verification code entered:", code);
    };

    return (
        <VerificationCodeInput
            length={6}
            onComplete={handleComplete}
        />
    );
}

export default App;
```

---

## API

### Props

| Name         | Type                     | Default     | Description                                                                |
| ------------ | ------------------------ | ----------- | -------------------------------------------------------------------------- |
| `length`     | `number`                 | `6`         | Number of input boxes for the verification code.                           |
| `onComplete` | `(code: string) => void` | `undefined` | Callback triggered when the user completes entering the verification code. |

---

## Examples

### Default Usage (6 Digits)

The default configuration uses 6 input boxes.

```tsx
<VerificationCodeInput
    length={6}
    onComplete={(code) => console.log(code)}
/>
```

### Four Digits

You can customize the number of input boxes using the `length` prop.

```tsx
<VerificationCodeInput
    length={4}
    onComplete={(code) => console.log(code)}
/>
```

---

## Storybook

For interactive examples and testing, visit the [Storybook documentation](#). _(Update this link to your live Storybook instance.)_

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
