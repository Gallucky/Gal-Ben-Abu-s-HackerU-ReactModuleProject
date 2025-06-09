## 📅 Updated to Commit #80 | Date: 09/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
- Working on adding a badge (styling feature) in the about page.
- Broken down the the user roles and permissions section into smaller chunks with the help of UserRoleCard component.
It is still work in progress.

```

### ✅ Completed

- Improved the animation on the [`DarkModeButton Component`](./src/components/other/DarkModeButton.tsx) to trigger on click.
- Refactored the [`About Page`](./src/pages/About/About.page.tsx) by organizing its sections into a new directory.

### ➕ Added

- Created a new `Sections` directory at [`src/pages/About/Sections/`](./src/pages/About/Sections/) to better structure the components of the About page.

### 🔄 Changed

- In [`DarkModeButton.tsx Component`](./src/components/other/DarkModeButton.tsx), updated the animation to be handled via a JavaScript `onClick` event for more precise control.
- Modified [`DarkModeButton.css`](./src/styles/DarkModeButton.css) to change the animation duration to `300ms` and remove the infinite loop, ensuring it runs only once per click.
- Updated the import paths in the [`About Page`](./src/pages/About/About.page.tsx) to point to the new locations of the section components.

### 🗑️ Deleted

- Removed section components from their previous location in `src/pages/About/` as they have been moved.
  - `src/pages/About/KeyFeatures.section.tsx`
  - `src/pages/About/ProtectedRoutes.section.tsx`
  - `src/pages/About/TechnicalArchitecture.section.tsx`
  - `src/pages/About/UserRoles.section.tsx`

### 🏷️ Renamed / Moved

- Moved the section components of the About page into the new [`src/pages/About/Sections/`](./src/pages/About/Sections/) directory to improve project organization.
