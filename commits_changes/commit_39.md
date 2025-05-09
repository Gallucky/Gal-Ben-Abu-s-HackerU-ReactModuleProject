## → Commit #39 | | Date: 29/04/2025

## <u>Todo</u>

- Fix the bug that the fallback color values doesn't show up entirely, not fully supported.

## 🔄 <u>Changes</u>

### → <u>Added</u>

- `Changelog.template` file to save formats of this file.
- `TailwindConstantColor` a new type for constant colors like `black` and `white`.
- Added `[[See more]](./)` format to the `Changelog.template` file.
- Added a new type [`LightDarkMode`](./src/components/FormInput.tsx).
- Created defaults value object for a fallback support. [See more](./src/components/FormInput.tsx).

### → <u>Changed</u>

- The type [`Color`](./src/types/color.t.ts) has been modified to include the new added type `TailwindConstantColor`. [[See more]](#-added)
- The methods `valueOfColor` and `colorToTailwindClassSuffix` [[See more]](./src/utils/color.ts)
  <br>have been updated to support the newly added type `TailwindConstantColor`.

### → <u>Removed</u>

- `plugins` directory - no longer has a use.
- `styles/custom-tailwind-classes` directory - no longer has a use.
