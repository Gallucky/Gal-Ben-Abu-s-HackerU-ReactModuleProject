## 📅 Updated to Commit #82 | Date: 12/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
Created the basic structure of the page.
- Tabs component is used to have to sections / pages inside the page.
- `Cards` `TabItem` contains a table with columns with cards information.

I need to figure out a way to:
1. To add pagination to the table itself.
2. Load all the data and make each `TableRow` clickable to show the card details.
3. Add an option / column / button for delete card.
4. Do the same but for users data.
```

### ✅ Completed

- Refactored the user role display logic on the [`About Page`](./src/pages/About/About.page.tsx) to accurately indicate the current user's permissions.
- Implemented the initial structure and routing for the new admin-only CRM page.

### ➕ Added

- Created the new [`CRM Page`](./src/pages/CRM/CRM.page.tsx) and its containing directory [`CRM/`](./src/pages/CRM/).
- Added a route for the [`CRM Page`](./src/pages/CRM/CRM.page.tsx) in the [`RoutesHandler Component`](./src/components/App/Routes/RoutesHandler.tsx), accessible only to admin users.
- Added a navigation link to the CRM page in the [`CustomNavbar Component`](./src/components/layout/CustomNavbar.tsx) that is only visible to admin users.
- Created [`commit_81.md`](./commits_changes/commit_81.md) to document previous changes.

### 🔄 Changed

- In the [`UserRoleCard Component`](./src/pages/About/Sections/UserRoles/UserRoleCard.tsx), replaced direct role comparison with a more explicit `userHasThisPermissions` prop to determine if the "You have this permissions" badge should be displayed.
- Updated the [`UserRoles.section Component`](./src/pages/About/Sections/UserRoles/UserRoles.section.tsx) to pass the `userHasThisPermissions` prop to each [`UserRoleCard Component`](./src/pages/About/Sections/UserRoles/UserRoleCard.tsx), ensuring the current user's role is correctly highlighted.

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
