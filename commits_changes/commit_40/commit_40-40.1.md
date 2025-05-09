## → Commit #40 - #40.1 | Date: 30/04/2025

## ✅ Completed

- [x] Improving the [`FormInput`](./src/components/FormInput.tsx) component.
- [x] Working on the [`Login Page`](./src/pages/Login.page.tsx).

## 🔄 Changes

### → <u>Added</u>

> `Nothing has been added.`

### → <u>Changed</u>

- `FormInput` component is now getting the default values inside the base-form css classes with `@apply` directive.

### → <u>Removed</u>

- Fix the bug that the fallback color values doesn't show up entirely, not fully supported.<br>
  `This fix is deprecated because the whole idea / feature is now deprecated and removed.`
- The `colors` prop is removed and thus the following types are no longer in use hence why removed:
  1. `FormInput_InputColors`
  2. `FormInput_LabelColors`
  3. `LightDarkMode`
  4. `FormInputColors`
