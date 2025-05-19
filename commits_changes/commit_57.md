## 📅 Updated to Commit #57 | Date: 18/05/2025

## 🛠️ In Progress

- Working on the cards like and dislike functionality.

## 🎯 Todo

- [ ] To complete the work on the `screenSlice`.
- [ ] Create custom hooks for auth, screen view port etc...
- [x] Fix the responsive mobile styling issues.
- [ ] Profile Page - Create a page with some of the user's data.
- [ ] Cards like and dislike functionality.
- [ ] Favorites Cards Page.
- [ ] Search functionality.
- [ ] CRM Page for admin users.
- [ ] Create cards functionality for business users.

## ✅ Completed

> `Nothing has been completed.`

## 🔄 Changes

### → <u>Added</u>

- `src/hooks/useContent.ts`: New hook for like/dislike card functionality.
- `src/utils/cardDataPropsConvertor.ts`: Utility to convert API card data to CardProps.
- `src/styles/animations/tilting.animation.css`: CSS animation for tilting (used for like button).

### → <u>Changed</u>

- `src/components/card/Card.tsx`: Added like/dislike heart icon, uses `useContent`, expects `_id` and `userConnected` props, handles like/dislike click with animation and color change.
- `src/components/card/CardsContainer.tsx`: Passes `userConnected` and `_id` props to `Card`, uses `useAuth` to determine if a user is connected.
- `src/hooks/useAuth.ts`: Exposes `userToken` in the returned object for authenticated requests.
- `src/main.tsx`: Imports the new animation CSS file.
- `src/pages/Home.page.tsx`: Uses the new `convertCardDataToProps` utility, adds a function to get favorite cards for the user.
- `src/types/card.t.ts`: Updates the `TCardData` type to match the API response more closely (adds fields, makes types more specific).
- `src/utils/color.ts`: Removes commented-out debug lines.

### → <u>Removed</u>

> `Nothing has been removed.`
