## 📅 Updated to Commit #75 | Date: 06/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
Some bug fixes and tweaks at various places for example CreateCard Page, Contact Section etc...
Tweaked the styling and position of the edit and delete icons in a card.
```

### ✅ Completed

> `Nothing has been completed.`

### ➕ Added

- 🆕 Edit (`MdOutlineModeEditOutline`) and delete (`MdDelete`) icons added for user-created cards in [`Card.tsx`](./src/components/card/Card.tsx)
- 🆕 Props `userCardCreator` added and passed from [`CardsContainer.tsx`](./src/components/card/CardsContainer.tsx) to [`Card.tsx`](./src/components/card/Card.tsx)

### 🔄 Changed

- 🎨 Enhanced button hover effects and layout structure in [`Card.tsx`](./src/components/card/Card.tsx)
- ✅ Updated logic in [`CardsContainer Component`](./src/components/card/CardsContainer.tsx) to show fallback when no cards are found
- 🧩 Expanded props and made styling of [`CardsNotFound Component`](./src/components/utils/CardsNotFound.tsx) more flexible with optional class names
- 🛠️ Minor adjustments in [`CreateCard Page`](./src/pages/CreateCard/CreateCard.page.tsx), [`Contact.section.tsx`](./src/pages/CreateCard/Contact.section.tsx), and [`UserCreatedCards Page`](./src/pages/UserCreatedCards/UserCreatedCards.page.tsx)

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
