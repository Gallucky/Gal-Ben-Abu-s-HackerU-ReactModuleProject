## 📅 Updated to Commit #63 | Date: 23/05/2025

## 🛠️ In Progress

- Working on the cards like and dislike functionality.
- Refactored profile page for inline editing and user updates ([`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx)).

## 🎯 Todo

- [ ] Complete [`screenSlice`](src/store/screenSlice.ts).
- [ ] Create custom hooks for auth, screen viewport, etc.
- [ ] Finish and polish profile sections ([`Name.section.tsx`](src/pages/Registration/Name.section.tsx), [`PersonalProfileInfo.section.tsx`](src/pages/Profile/PersonalProfileInfo.section.tsx), [`Address.section.tsx`](src/pages/Registration/Address.section.tsx)).
- [ ] Add card details and favorites functionality.
- [ ] Implement search and CRM pages.

## ✅ Completed

- Refactored profile page for inline editing ([`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx)).
- Added modular personal info section ([`PersonalProfileInfo.section.tsx`](src/pages/Profile/PersonalProfileInfo.section.tsx)).
- Enhanced form input and user update logic ([`FormInput.tsx`](src/components/form/FormInput.tsx), [`useAuth.ts`](src/hooks/useAuth.ts), [`convertTUser.ts`](src/utils/convertTUser.ts)).

## 🔄 Changes

### → <u>Added</u>

- [`PersonalProfileInfo.section.tsx`](src/pages/Profile/PersonalProfileInfo.section.tsx): Modular section for editing personal info inline.
- [`convertTUser.ts`](src/utils/convertTUser.ts): Utility for converting user objects to form/update data.
- `onSave` and `editable` support in [`FormInput.tsx`](src/components/form/FormInput.tsx), [`Name.section.tsx`](src/pages/Registration/Name.section.tsx), [`Address.section.tsx`](src/pages/Registration/Address.section.tsx).

### → <u>Changed</u>

- [`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx): Now supports inline editing and user data updates.
- [`useAuth.ts`](src/hooks/useAuth.ts): Added `userUpdateRequest` for updating user data via API.
- [`userSlice.ts`](src/store/userSlice.ts): Shows "Welcome Back!" toast and handles user updates.
- Types updated in [`user.t.ts`](src/types/user.t.ts) and [`SectionProps.t.ts`](src/types/pages/SectionProps.t.ts) for consistency.

### → <u>Removed</u>

> `Nothing has been removed.`
