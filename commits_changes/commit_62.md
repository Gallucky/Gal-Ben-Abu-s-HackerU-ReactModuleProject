## 📅 Updated to Commit #62 | Date: 22/05/2025

## 🛠️ In Progress

- Working on the cards like and dislike functionality.

## 🎯 Todo

- [ ] To complete the work on the [`screenSlice`](src/store/screenSlice.ts).
- [ ] Create custom hooks for auth, screen view port etc...
- [ ] Profile Page - Create a page with some of the user's data ([`src/pages/Profile/Profile.page.tsx`](src/pages/Profile/Profile.page.tsx)).
- [ ] Cards like and dislike functionality.
- [ ] Favorites Cards Page.
- [ ] Search functionality.
- [ ] CRM Page for admin users.
- [ ] Create cards functionality for business users.
- [ ] Complete and uncomment [`src/pages/Profile/Name.section.tsx`](src/pages/Profile/Name.section.tsx) and other incomplete profile sections.

## ✅ Completed

- Refactored [`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx) to support inline editing of user fields using the enhanced [`FormInput`](src/components/form/FormInput.tsx) component.
- Added `editable` and `onSave` props to [`FormInput`](src/components/form/FormInput.tsx) for toggling edit mode and handling value updates.
- Improved user experience by allowing email and other fields to be edited directly in the profile page.
- Updated [`useAuth`](src/hooks/useAuth.ts) to expose a `userUpdateRequest` method for future user data updates.
- Minor code cleanups and improved maintainability in Home and Profile pages.

## 🔄 Changes

### → <u>Added</u>

- Inline editing support for profile fields via [`FormInput`](src/components/form/FormInput.tsx) and [`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx).
- `userUpdateRequest` method in [`useAuth`](src/hooks/useAuth.ts) for future user data updates.

### → <u>Changed</u>

- Refactored [`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx) and [`FormInput`](src/components/form/FormInput.tsx) for improved editability and maintainability.
- Cleaned up and improved code in [`Home.page.tsx`](src/pages/Home.page.tsx).

### → <u>Removed</u>

> `Nothing has been removed.`
