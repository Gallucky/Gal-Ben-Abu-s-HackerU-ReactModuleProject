## 📅 Updated to Commit #84 | Date: 14/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
I need to figure out a way to:
2. Load all the data and make each `TableRow` clickable to show the card details.
3. Add an option / column / button for delete card.
4. Do the same but for users data.
```

### ✅ Completed

- Implemented pagination to the CRM table (now shows 5 records per page)
- Added actions column to CRM table for edit/delete functionality
- Enhanced table cell tooltips with proper truncation handling

### ➕ Added

- [`CardsTableActionsCell Component`](src/components/utils/CardsTableActionsCell.tsx) - Actions cell component for table edit/delete operations
- Actions column header to CRM table
- Tooltip functionality to all table cells for better UX
- User authentication context to [`CRM Page`](src/pages/CRM/CRM.page.tsx)
- Enhanced `convertCardToTableRecord` utility with user permissions and action callbacks
- Global animation support for parent-child tilt effects

### 🔄 Changed

- [`Card Component`](src/components/card/Card.tsx) - Updated animation classes from `animate-tilt-hover` to `animate-tilt`
- [`CRM Page`](src/pages/CRM/CRM.page.tsx) - Added user authentication integration and actions column
- [`convertCardToTableRecord Utility`](src/utils/convertCardToTableRecord.tsx) - Enhanced with user permissions, tooltips, and action callbacks
- [`lazyImport Utility`](src/utils/lazyImport.ts) - Refactored to support all file types and improved error handling
- [`tilting.animation.css`](src/styles/animations/tilting.animation.css) - Updated animation trigger to support parent-child hover effects
- Removed table border styling from CRM table

### 🗑️ Deleted

- Hover-specific animation classes (`animate-tilt-hover`) in favor of unified `animate-tilt`
- Redundant border styling from CRM table

### 🏷️ Renamed / Moved

- Hover-specific animation classes renamed (`animate-tilt-hover`) to `animate-tilt`
