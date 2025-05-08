# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #45 | Date: 08/05/2025

## 🛠️ In Progress

- Continue work of the registration / sign-up page.
- Working on fixing the styling bugs.

## 🎯 Todo

- [ ] Registration page
  - [x] Layout creation.
  - [x] Styling the layout.
  - [ ] Fix styling bugs.
  - [ ] Testing and checking logic.
  - [ ] Adding toast of success and error.
  - [ ] Validation.
- Global State
  - Creating a global state for the user data.
  - Saving the user data while logged in.
  - Conditional rendering the appropriate links while logged in or not.
- Fixing any style issues or bugs.
- Profile Page - Create a page with some of the user's data.

## ✅ Completed

> `Nothing has been completed.`

## 🔄 Changes

### → <u>Added</u>

- Added [`tailwindSizeString.t`](./src/types/tailwind/tailwindSizeString.t.ts) type file there is a type which is exported and defines the tailwind `size` class logic.
- Added [`register.joi`](./src/validations/register.joi.ts) validation file for the checking of the registration fields validity.

### → <u>Changed</u>

- [`CheckBox`](./src/components/utils/CheckBox.tsx) now has support for text size and the checkbox size itself.
- Added [`textSize`](./src/utils/textSize.ts) moved the constants to be with the type in the type file itself and export from there and added the import to this file.
- Added [`sizeUnit`](./src/types/sizeUnit.t.ts) moved the constants to be with this file type itself and export it.

### → <u>Removed</u>

> `Nothing has been removed.`

---

## Previous Commits

### 📅 Updated to Commit #44 | Date: 07/05/2025

#### 🛠️ In Progress

- Continue work of the registration / sign-up page.
- Working on fixing the styling bugs.

#### 🎯 Todo

- [ ] Registration page
  - [x] Layout creation.
  - [x] Styling the layout.
  - [ ] Fix styling bugs.
  - [ ] Testing and checking logic.
  - [ ] Adding toast of success and error.
  - [ ] Validation.
- Global State
  - Creating a global state for the user data.
  - Saving the user data while logged in.
  - Conditional rendering the appropriate links while logged in or not.
- Fixing any style issues or bugs.
- Profile Page - Create a page with some of the user's data.

#### ✅ Completed

> `Nothing has been completed.`

#### 🔄 Changes

##### → <u>Added</u>

- Added [`textSize`](./src/utils/textSize.tsx) utility file with an helper method.
- Added [`tailwindTextSizeString.t`](./src/types/tailwind/tailwindTextSizeString.t.ts) type.
- Added [`types/tailwind`](./src/types/tailwind) directory.

##### → <u>Changed</u>

- [`CheckBox`](./src/components/utils/CheckBox.tsx) now has support for text size and size differently and needs to be worked on more.

##### → <u>Removed</u>

> `Nothing has been removed.`

### 📅 Updated to Commit #43 | Date: 06/05/2025

#### 🛠️ In Progress

- Continue work of the registration / sign-up page.

#### 🎯 Todo

- [ ] Registration page
  - [x] Layout creation.
  - [x] Styling the layout.
  - [ ] Fix styling bugs.
  - [ ] Testing and checking logic.
  - [ ] Adding toast of success and error.
  - [ ] Validation.
- Global State
  - Creating a global state for the user data.
  - Saving the user data while logged in.
  - Conditional rendering the appropriate links while logged in or not.
- Fixing any style issues or bugs.
- Profile Page - Create a page with some of the user's data.

#### ✅ Completed

- Needs to migrate the `Grid` layout of the `address` part.

#### 🔄 Changes

##### → <u>Added</u>

- Added [`FormAreaBorder`](./src/components/utils/FormAreaBorder.tsx) utility component.
- Added [`FormAreaTitle`](./src/components/utils/FormAreaTitle.tsx) utility component.

##### → <u>Changed</u>

- [`FormInput`](./src/components/FormInput.tsx) now has support for type file by using different styling and logic.

##### → <u>Removed</u>

> `Nothing has been removed.`

### 📅 Updated to Commit #42 | Date: 01/05/2025

#### 🛠️ In Progress

- Creation of the registration / sign-up page.

#### 🎯 Todo

- Needs to migrate the `Grid` layout of the `address` part.

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

#### ✅ Completed

> `Nothing has been completed.`

#### 🔄 Changes

##### → <u>Added</u>

- Added [`utils`](./src/components/utils/) directory for utility components.
- Added [`Flex`](./src/components/utils/Flex.tsx) utility component.
- Added [`Grid`](./src/components/utils/Grid.tsx) utility component.
- Added [`GridItem`](./src/components/utils/GridItem.tsx) utility component.
- Added [`CheckBox`](./src/components/utils/CheckBox.tsx) utility component.

##### → <u>Changed</u>

- [`FormInput`](./src/components/FormInput.tsx) now has support for label and input classNames.

##### → <u>Removed</u>

- `Login.page.css` at the [`styles/pages`](./src/styles/pages) directory.

### 📅 Updated to Commit #41 | Date: 30/04/2025

#### 🛠️ In Progress

#### Todo

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

#### ✅ Completed

- [x] Improving the [`FormInput`](./src/components/FormInput.tsx) component.
- [x] Working on the [`Login Page`](./src/pages/Login.page.tsx).

#### 🔄 Changes

##### → <u>Added</u>

> `Nothing has been added.`

##### → <u>Changed</u>

- `FormInput` component is now getting the default values inside the base-form css classes with `@apply` directive.

##### → <u>Removed</u>

- Fix the bug that the fallback color values doesn't show up entirely, not fully supported.<br>
  `This fix is deprecated because the whole idea / feature is now deprecated and removed.`
- The `colors` prop is removed and thus the following types are no longer in use hence why removed:
  1. `FormInput_InputColors`
  2. `FormInput_LabelColors`
  3. `LightDarkMode`
  4. `FormInputColors`

### 📅 Updated to Commit #40.2 | Date: 30/04/2025

#### 🛠️ In Progress

#### 🎯 Todo

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

#### ✅ Completed

> `Nothing has been completed.`

#### 🔄 Changes

##### → <u>Added</u>

- `PageWrapper.css` at the [`styles`](./src/styles) directory.<br>
  Migrated all of the styling of login page to here.
- [`PageWrapper`](./src/components/PageWrapper.tsx) that will include the base structure of the pages where there is a form in the center of the screen.

##### → <u>Changed</u>

- The names of the styling classes that were in the `Login.page.css` and were moved to `PageWrapper.css` to be more general.

##### → <u>Removed</u>

- `Login.page.css` at the [`styles/pages`](./src/styles/pages) directory.

### → Commit #40 - #40.1

#### ✅ Completed

- [x] Improving the [`FormInput`](./src/components/FormInput.tsx) component.
- [x] Working on the [`Login Page`](./src/pages/Login.page.tsx).

#### 🔄 Changes

##### → <u>Added</u>

> `Nothing has been added.`

##### → <u>Changed</u>

- `FormInput` component is now getting the default values inside the base-form css classes with `@apply` directive.

##### → <u>Removed</u>

- Fix the bug that the fallback color values doesn't show up entirely, not fully supported.<br>
  `This fix is deprecated because the whole idea / feature is now deprecated and removed.`
- The `colors` prop is removed and thus the following types are no longer in use hence why removed:
  1. `FormInput_InputColors`
  2. `FormInput_LabelColors`
  3. `LightDarkMode`
  4. `FormInputColors`

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
