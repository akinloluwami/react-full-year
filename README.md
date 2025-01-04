# react-full-year

`react-full-year` is a lightweight React component that fetches and displays the current year from an API. It supports all the props of a standard `<p>` tag and includes customizable loading options.

---

## Features

- Fetches the current year dynamically from the API: [https://getfullyear.com/api/year](https://getfullyear.com/api/year)
- Supports all HTML `<p>` tag props for styling and attributes.
- Customizable loading states:
  - Display default loading text (`Loading...`).
  - Provide a custom loading component.
  - Disable loading display entirely.

---

## Installation

Install the package using npm:

```bash
npm install react-full-year
```

---

## Usage

### Basic Example

```tsx
import React from "react";
import { FullYear } from "react-full-year";

const App = () => {
  return (
    <div>
      <FullYear style={{ color: "blue", fontSize: "20px" }} />
    </div>
  );
};

export default App;
```

### Custom Loading Component

```tsx
import React from "react";
import { FullYear } from "react-full-year";

const App = () => {
  return (
    <div>
      <FullYear
        loadingComponent={<span>Fetching the year...</span>}
        style={{ fontSize: "18px", color: "green" }}
      />
    </div>
  );
};

export default App;
```

### Disabling Loading Text

```tsx
import React from "react";
import { FullYear } from "react-full-year";

const App = () => {
  return (
    <div>
      <FullYear showLoading={false} style={{ fontWeight: "bold" }} />
    </div>
  );
};

export default App;
```

---

## Props

| Prop               | Type                           | Default     | Description                                                                          |
| ------------------ | ------------------------------ | ----------- | ------------------------------------------------------------------------------------ |
| `showLoading`      | `boolean`                      | `true`      | Whether to show default loading text (`Loading...`) while the year is being fetched. |
| `loadingComponent` | `React.ReactNode`              | `undefined` | Custom component to display while loading. Overrides `showLoading` when provided.    |
| `...props`         | `HTMLAttributes<HTMLPElement>` | `undefined` | All standard `<p>` props, such as `style`, `className`, etc.                         |

---

## API Response Example

The year is fetched from the API [https://getfullyear.com/api/year](https://getfullyear.com/api/year), which returns data in the following format:

```json
{
  "year": 2025,
  "year_string": "2025",
  "sponsored_by": "Viagra: standing tall and proud"
}
```

---

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/akinloluwami/react-full-year.git
cd react-full-year
npm install
```

Build the package:

```bash
npm run build
```

Run the example:

```bash
npm start
```
