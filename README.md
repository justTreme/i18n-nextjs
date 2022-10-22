<h1 align="center">i18n-nextjs</h1>
<h3 align="center">
  An open source translation library for NextJS, <a href="https://klingenberg-dev.de">made by justTreme</a>.
</h3>

## Get started

### 🐇 Quick start

Install `i18n-nextjs` with via your package manager:

```
npm install i18n-nextjs
```

Then import the `useTranslation` hook:

```jsx
import { useTranslation } from "i18n-nextjs";

export const MyComponent = () => {
    const t = useTranslation();
    
    return (
        <span>{t("key.to.value", {name: "My Name"})}</span>
    )
}
```

All locales are stored in the `locales` folder in the public folder of your project.
<br>
For every locale you need to create a file with the name of the locale. (e.g. `en.json`)
<br>
Structure of the locale file:

```json
{
    "key": {
        "to": {
            "value": "Hello, {{name}}!"
        }
    }
}
```

### 👩🏻‍⚖️ License

- Framer Motion is MIT licensed.
