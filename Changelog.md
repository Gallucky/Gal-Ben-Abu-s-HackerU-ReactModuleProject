# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #40 | Date: 30/04/2025

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
  This fix is deprecated because the whole idea / feature is no deprecated and removed.
- The `colors` prop is removed and thus the following types are no longer in use hence why removed:
  1. `FormInput_InputColors`
  2. `FormInput_LabelColors`
  3. `LightDarkMode`
  4. `FormInputColors`

---

## Previous Commits

### → Commit #39

#### <u>Todo</u>

- Fix the bug that the fallback color values doesn't show up entirely, not fully supported.

#### 🔄 <u>Changes</u>

##### → <u>Added</u>

- `Changelog.template` file to save formats of this file.
- `TailwindConstantColor` a new type for constant colors like `black` and `white`.
- Added `[[See more]](./)` format to the `Changelog.template` file.
- Added a new type [`LightDarkMode`](./src/components/FormInput.tsx).
- Created defaults value object for a fallback support. [See more](./src/components/FormInput.tsx).

##### → <u>Changed</u>

- The type [`Color`](./src/types/color.t.ts) has been modified to include the new added type `TailwindConstantColor`. [[See more]](#-added)
- The methods `valueOfColor` and `colorToTailwindClassSuffix` [[See more]](./src/utils/color.ts)
  <br>have been updated to support the newly added type `TailwindConstantColor`.

##### → <u>Removed</u>

- `plugins` directory - no longer has a use.
- `styles/custom-tailwind-classes` directory - no longer has a use.

### → Commit #38

#### 🛠️ <u>In Progress</u>

- Improving the [`FormInput`](./src/components/FormInput.tsx) component.
- Working on the [`Login Page`](./src/pages/Login.page.tsx).

#### ↪️ <u>Changed</u>

- Reworked on the [`Changelog.md`](./Changelog.md) file, now with a new format.
