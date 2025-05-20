## 📅 Updated to Commit #59 | Date: 20/05/2025

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

> `Nothing has been completed.`

## 🔄 Changes

### → <u>Added</u>

- [`src/pages/Registration/Name.section.tsx`](src/pages/Registration/Name.section.tsx): Modular section for registration name fields.
- [`src/pages/Registration/AccountInfo.section.tsx`](src/pages/Registration/AccountInfo.section.tsx): Modular section for registration account info fields.
- [`src/types/pages/SectionProps.t.ts`](src/types/pages/SectionProps.t.ts): Shared type for section props in registration/profile sections.

### → <u>Changed</u>

- [`src/pages/Registration/Registration.page.tsx`](src/pages/Registration/Registration.page.tsx): Refactored to use modular section components for improved maintainability.
- [`src/components/App/Routes/RoutesHandler.tsx`](src/components/App/Routes/RoutesHandler.tsx): Fixed import path for registration page.

### → <u>Removed</u>

- [`src/pages/Registration.page.tsx`](src/pages/Registration.page.tsx): Removed old monolithic registration page.
- [`src/pages/Profile/Name.section.tsx`](src/pages/Profile/Name.section.tsx): Removed unused/incomplete profile section (now replaced by modular version in registration).
- [`src/pages/Profile/SectionProps.t.ts`](src/pages/Profile/SectionProps.t.ts): Removed old section props type (now in `types/pages`).
