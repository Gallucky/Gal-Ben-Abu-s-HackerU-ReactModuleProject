## 📅 Updated to Commit #74 | Date: 03/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
My Cards page is now working and updating even if creating a card while viewing it.
Started to work on the card edit and delete functionality currently only the icons are shown for each card that the user created.
```

### ✅ Completed

> `Nothing has been completed.`

### ➕ Added

- ➕ Added edit (`MdOutlineModeEditOutline`) and delete (`MdDelete`) icons to cards created by the user in [`Card.tsx`](./src/components/card/Card.tsx)
- ➕ Added `userCardCreator` prop in [`Card Component`](./src/components/card/Card.tsx) and passed from [`CardsContainer Component`](./src/components/card/CardsContainer.tsx)

### 🔄 Changed

- 🔄 Updated `CardDetails` page styling for the card's image.
  [`CardDetails Page`](./src/pages/CardDetails/CardDetails.page.tsx)
- 🔄 Adjusted top spacing in [`Header Component`](./src/components/other/Header.tsx) by adding `mt-20` to improve layout
- 🔄 Minor improvements and cleanup across multiple pages ([`CardDetails Page`](./src/pages/CardDetails/CardDetails.page.tsx),
  [`CreateCard Page`](./src/pages/CreateCard/CreateCard.page.tsx),
  [`Favorites Page`](./src/pages/Favorites/Favorites.page.tsx),
  [`Home Page`](./src/pages/Home/Home.page.tsx),
  [`UserCreatedCards Page`](./src/pages/UserCreatedCards/UserCreatedCards.page.tsx))
- 🔄 General notes updated to reflect My Cards auto-updating and initiation of edit/delete functionality

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
