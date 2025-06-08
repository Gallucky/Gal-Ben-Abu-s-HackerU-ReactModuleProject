## 📅 Updated to Commit #77 | Date: 08/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
The project is now completed.
Now need to clean up code according to the requirements of the project.
I can now work on some bonuses.
```

### ✅ Completed

- Editing card logic completed.
- Deleting card logic completed.
- Now when unliking a card within the [`Favorites Page`](./src/pages/Favorites.page.tsx) the card will disappear - because it is no longer a favorite card.

> Basically the whole project is now completed except code cleanup, final touches tweaks and bonuses.

### ➕ Added

- Implemented card deletion functionality:  
  ↳ [`Card Component`](./src/components/card/Card.tsx)  
  ↳ [`CardsContainer Component`](./src/components/card/CardsContainer.tsx)  
  ↳ [`useAuth Hook`](./src/hooks/useAuth.ts)

- Implemented card unliking handling & UI update trigger:  
  ↳ [`Card Component`](./src/components/card/Card.tsx)  
  ↳ [`CardsContainer Component`](./src/components/card/CardsContainer.tsx)  
  ↳ [`Favorites Page`](./src/pages/Favorites.page.tsx)

- Added edit handler callback from `CreateCard` to `CardsContainer`:  
  ↳ [`CreateCard Page`](./src/pages/CreateCard/CreateCard.page.tsx)  
  ↳ [`CardsContainer Component`](./src/components/card/CardsContainer.tsx)

### 🔄 Changed

- Refactored modal rendering logic in [`CardsContainer`](./src/components/card/CardsContainer.tsx) to directly render `CreateCard` instead of wrapping it in a div.
- Cleaned up and relocated `getCards()` function in [`Favorites.page.tsx`](./src/pages/Favorites.page.tsx) to support state updates on card changes.
- Improved prop handling and type safety across multiple components:
  - [`CardProps`](./src/components/card/Card.tsx)
  - `CardsContainer` props (added `onCardsEdited`, `onCardsDeleted`, `onCardsUnliked`)

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
