## 📅 Updated to Commit #78 | Date: 08/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
About Page had been overhauled to include more details and be more user-friendly.
Admin users can now delete any card.
```

### ✅ Completed

> `Nothing has been completed.`

### ➕ Added

- New sections added to the [`About Page`](./src/pages/About/About.page.tsx):
  - [`KeyFeatures.section.tsx`](./src/pages/About/KeyFeatures.section.tsx)
  - [`ProtectedRoutes.section.tsx`](./src/pages/About/ProtectedRoutes.section.tsx)
  - [`TechnicalArchitecture.section.tsx`](./src/pages/About/TechnicalArchitecture.section.tsx)
  - [`UserRoles.section.tsx`](./src/pages/About/UserRoles.section.tsx)

### 🔄 Changed

- Made `Admin` users capable of deleting **any card**:
  - [`Card Component`](./src/components/card/Card.tsx)
  - [`CardsContainer Component`](./src/components/card/CardsContainer.tsx)

### 🗑️ Deleted

- Removed the old [`About Page`](./src/pages/About.page.tsx)

### 🏷️ Renamed / Moved

- Moved and refactored [`About Page`](./src/pages/About/About.page.tsx) into a dedicated folder structure
  - Update in [`RoutesHandler Component`](./src/components/App/Routes/RoutesHandler.tsx)
