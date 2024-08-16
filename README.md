# ui-mod

> React components for fast prototyping

## Setup
`npm i @ui-mod/ui-mod`

## Components
### Toast

Import toast
```jsx
import { Toast } from "@ui-mod/ui-mod";
```

Define state
```jsx
const [toast, setToast] = useState(null);
```

Define Element
```jsx
<Toast state={{ toast, setToast }} />
```

Show a toast
```js
setToast("This is my toast")
```

## For Contributers
- To build and link library
    - `npm run build`
    - `npm link`
- To use in sample project 
    - `npm link ui-mod`
- To publish
    - `npm publish --access=public`