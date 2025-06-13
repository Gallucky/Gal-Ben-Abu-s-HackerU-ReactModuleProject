# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

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

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
| `12/06/2025` | [`82`](./commits_changes/commit_82.md)                       |
| `12/06/2025` | [`81`](./commits_changes/commit_81.md)                       |
| `09/06/2025` | [`80`](./commits_changes/commit_80.md)                       |
| `09/06/2025` | [`79`](./commits_changes/commit_79.md)                       |
| `08/06/2025` | [`78`](./commits_changes/commit_78.md)                       |
| `08/06/2025` | [`77`](./commits_changes/commit_77.md)                       |
| `07/06/2025` | [`76`](./commits_changes/commit_76.md)                       |
| `06/06/2025` | [`75`](./commits_changes/commit_75.md)                       |
| `03/06/2025` | [`74`](./commits_changes/commit_74.md)                       |
| `02/06/2025` | [`73`](./commits_changes/commit_73.md)                       |
| `01/06/2025` | [`72`](./commits_changes/commit_72.md)                       |
| `31/05/2025` | [`71`](./commits_changes/commit_71.md)                       |
| `30/05/2025` | [`70`](./commits_changes/commit_70.md)                       |
| `29/05/2025` | [`69`](./commits_changes/commit_69.md)                       |
| `28/05/2025` | [`68`](./commits_changes/commit_68.md)                       |
| `28/05/2025` | [`67`](./commits_changes/commit_67.md)                       |
| `27/05/2025` | [`66.1`](./commits_changes/commit_66.1.md)                   |
| `25/05/2025` | [`66`](./commits_changes/commit_66.md)                       |
| `24/05/2025` | [`65`](./commits_changes/commit_65.md)                       |
| `24/05/2025` | [`64`](./commits_changes/commit_64.md)                       |
| `23/05/2025` | [`63`](./commits_changes/commit_63.md)                       |
| `22/05/2025` | [`62`](./commits_changes/commit_62.md)                       |
| `21/05/2025` | [`61`](./commits_changes/commit_61.md)                       |
| `20/05/2025` | [`60`](./commits_changes/commit_60.md)                       |
| `20/05/2025` | [`59`](./commits_changes/commit_59.md)                       |
| `19/05/2025` | [`58`](./commits_changes/commit_58.md)                       |
| `18/05/2025` | [`57`](./commits_changes/commit_57.md)                       |
| `18/05/2025` | [`56`](./commits_changes/commit_56.md)                       |
| `17/05/2025` | [`55`](./commits_changes/commit_55.md)                       |
| `16/05/2025` | [`54`](./commits_changes/commit_54.md)                       |
| `14/05/2025` | [`53`](./commits_changes/commit_53.md)                       |
| `13/05/2025` | [`52`](./commits_changes/commit_52.md)                       |
| `12/05/2025` | [`51-51.2`](./commits_changes/commit_51-51.2.md)             |
| `11/05/2025` | [`50-50.1`](./commits_changes/commit_50-50.1.md)             |
| `10/05/2025` | [`49`](./commits_changes/commit_49.md)                       |
| `09/05/2025` | [`48`](./commits_changes/commit_48.md)                       |
| `09/05/2025` | [`47`](./commits_changes/commit_47.md)                       |
| `09/05/2025` | [`46`](./commits_changes/commit_46.md)                       |
| `08/05/2025` | [`45`](./commits_changes/commit_45.md)                       |
| `07/05/2025` | [`44`](./commits_changes/commit_44.md)                       |
| `06/05/2025` | [`43`](./commits_changes/commit_43.md)                       |
| `01/05/2025` | [`42`](./commits_changes/commit_42.md)                       |
| `30/04/2025` | [`41`](./commits_changes/commit_41.md)                       |
| `30/04/2025` | [`40.2`](./commits_changes/commit_40/commit_40.2.md)         |
| `30/04/2025` | [`40 - 40.1`](./commits_changes/commit_40/commit_40-40.1.md) |
| `29/04/2025` | [`39`](./commits_changes/commit_39.md)                       |
| `29/04/2025` | [`38`](./commits_changes/commit_38.md)                       |
