## 📅 Updated to Commit #73 | Date: 02/06/2025

[`← Go Back to Changelog.md`](../Changelog.md)

### 🔗 [Open TODO List](./todo-list.md)

### General Notes

```
Create Card works!
Good point to keep in mind is that only one card can be created per email - no email duplicates allowed.
Need to figure out on how to use/modify the useCards hook.
Make that when unliking a card it makes the ¹'Favorites Page' to re-render.
The current focus after that is to work on the created cards page.
Link to the page is already set up in the ²'Navbar Component'.
```

> [Favorites Page](./src/pages/Favorites.page.tsx)<br/>[Navbar Component](./src/components/layout/CustomNavbar.tsx)

### ✅ Completed

> `Nothing has been completed.`

### ➕ Added

- ➕ Introduced [`useCards` Hook](./src/hooks/useCards.ts) _(Untracked – in progress)_
- ➕ Created [`UserCreatedCards Page`](./src/pages/UserCreatedCards/UserCreatedCards.page.tsx)
- ➕ Added `Route` for `my-cards` page in [`RoutesHandler Component`](./src/components/App/Routes/RoutesHandler.tsx)
- ➕ Added new icon import (`PiCardsFill`) for cards page to [`Navbar Component`](./src/components/layout/CustomNavbar.tsx)

### 🔄 Changed

- 🔄 Updated [`RoutesHandler Component`](./src/components/App/Routes/RoutesHandler.tsx) to include `my-cards` route
- 🔄 Updated [`Navbar Component`](./src/components/layout/CustomNavbar.tsx) to conditionally show `My Cards` link for business users
- 🔄 Expanded changelog template with detailed manual prompt instructions

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
