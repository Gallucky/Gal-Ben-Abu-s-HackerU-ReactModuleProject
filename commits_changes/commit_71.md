## 📅 Updated to Commit #71 | Date: 31/05/2025

[`← Go Back to Changelog.md`](../Changelog.md)

### 🔗 [Open TODO List](./todo-list.md)

### General Notes

```
Fixed styling issues and some minor bugs.

Created and added the logo of the project + created a LogoIcon component for dynamic use.

Started to work on the create card logic.
```

### ✅ Completed

> `Nothing has been completed.`

### ➕ Added

- 🆕 Created new directory for icons  
  🔗 [`src/components/icons/`](./src/components/icons/)

- 🆕 Added new SVG assets  
  🔗 [`logo.svg`](./public/logo.svg), [`PiCardsDuotone_ReactIcons.svg`](./public/PiCardsDuotone_ReactIcons.svg)

- 🆕 Created new `CreateCard` page folder  
  🔗 [`src/pages/CreateCard/`](./src/pages/CreateCard/)

### 🔄 Changed

- 🎨 Improved visual feedback for phone icon with hover animation  
  🔗 [`Card.tsx`](./src/components/card/Card.tsx)

- 🧼 Simplified `DarkModeButton` by removing unused `useState` and `useEffect`  
  🔗 [`DarkModeButton.tsx`](./src/components/other/DarkModeButton.tsx)

- 🧩 Replaced static logo in navbar with dynamic `LogoIcon` component  
  🔗 [`CustomNavbar.tsx`](./src/components/layout/CustomNavbar.tsx)

- 🛠️ Minor adjustments in

  - [`useContent.ts`](./src/hooks/useContent.ts)
  - [`index.css`](./src/index.css)
  - [`Home.page.tsx`](./src/pages/Home.page.tsx)
  - [`PersonalProfileInfo.section.tsx`](./src/pages/Profile/PersonalProfileInfo.section.tsx)
  - [`color.t.ts`](./src/types/color.t.ts)

- ⚙️ Updated `package.json` with new scripts:
  - `status`: copies git status to clipboard
  - `diff`: copies git diff to clipboard

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
