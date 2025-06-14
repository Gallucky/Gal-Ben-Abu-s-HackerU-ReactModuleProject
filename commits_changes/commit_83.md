## 📅 Updated to Commit #83 | Date: 13/06/2025

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

- Implemented responsive CRM table with mobile card view
- Added lazy loading for all route components with proper loading states
- Created reusable view mode detection hook
- Enhanced card component styling with better alignment

### ➕ Added

- [`useViewMode` Hook](src/hooks/useViewMode.ts) - Centralized responsive breakpoint detection
- [`convertCardToTableRecord` Utility](src/utils/convertCardToTableRecord.tsx) - Convert card data to table rows
- [`lazyImport` Utility](src/utils/lazyImport.ts) - Dynamic page imports for code splitting
- Mobile-responsive card layout for CRM table on screens ≤1024px
- Pagination support to CRM table with 5 records per page
- Suspense loading states for all route components

### 🔄 Changed

- [`RoutesHandler` Component](src/components/App/Routes/RoutesHandler.tsx) - Converted all page imports to lazy loading with Suspense wrapper
- [`CRM` Page](src/pages/CRM/CRM.page.tsx) - Added full table functionality with pagination and responsive design
- [`Card` Component](src/components/card/Card.tsx) - Improved button alignment with `place-self-center`
- [`CardsContainer` Component](src/components/card/CardsContainer.tsx) - Refactored to use centralized `useViewMode` hook instead of local view mode logic

### 🗑️ Deleted

- Local view mode detection logic from CardsContainer (moved to reusable hook)

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
