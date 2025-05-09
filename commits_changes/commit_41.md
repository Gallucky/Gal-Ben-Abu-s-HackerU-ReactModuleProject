## 📅 Updated to Commit #41 | Date: 30/04/2025

## 🛠️ In Progress

## Todo

- Registration page
  - Layout creation.
  - Styling the layout.
  - Testing and checking logic.
  - Adding toast of success and error.
- Global State
  - Creating a global state for the user data.
  - Saving the user data while logged in.
  - Conditional rendering the appropriate links while logged in or not.
- Fixing any style issues or bugs.
- Profile Page - Create a page with some of the user's data.

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
