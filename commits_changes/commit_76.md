## 📅 Updated to Commit #76 | Date: 07/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
Re-used the CreateCard component for editing an existing card.
Editing card logic is completed.
Needs to fix the bug of the black background on submit edit card form modal.
Needs to update/re-render upon submitting edit card request from the modal.
```

### ✅ Completed

- Implemented card editing functionality with modal integration.
- Added modal to edit cards reusing the [`CreateCard Page`](./src/pages/CreateCard/CreateCard.page.tsx).
- Loaded card data on edit modal open using API call in [`CardsContainer Component`](./src/components/card/CardsContainer.tsx).
- Added edit icon handler in [`Card Component`](./src/components/card/Card.tsx).
- Connected edit modal form to update card API in [`useAuth.ts`](./src/hooks/useAuth.ts) and [`CreateCard Page`](./src/pages/CreateCard/CreateCard.page.tsx).
- Added pagination and split card display logic in [`CardsContainer Component`](./src/components/card/CardsContainer.tsx).

### ➕ Added

> `Nothing has been added.`

### 🔄 Changed

> `Nothing has been changed.`

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
