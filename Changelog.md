# Todo list of React Module Project.

### Updated to commit #34 | Date 27/04/2025:

## Changes:

- Almost finished the login implementation.
- Started fix / improvement of the `FormInput` component.

## Todo:

- [ ] Implement the login functionality.
  - [x] Create and apply the validations of the login.
  - [ ] To figure out a way to color the label, border, text, etc... all at the same time and in the right order / priority of:
  1. Base Colors - black and white in dark mode and some default focus color.
  2. Custom Colors - custom colors given using the className prop - defaults to the `Base Colors` ^ at option 1.
  3. Color Prop - the color from the color prop - defaults to the `Custom Colors` ^ at option 2.
- [ ] Implement the register functionality.

## Done:

- [x] Setting up the project structure.

  > #### The NavBar has the following components:

- [x] Create a NavBar component.

  - [x] Logo Section.
  - [x] SearchBox component.
  - DarkModeToggle component which is already implemented in react. -> Created a wrapper component for customizing the component.

- [x] Create a card component.

- [x] To add cards container.
- [x] To get cards from the api.

- [x] Need to fix the problem when changing into a page in the pagination where the cards have a longer text and it seems like a jump because of the height resizing...

- [x] Completed the work on the `FormInput` component.

- Created a `FormButton` component.
- Added tailwind css classes suggestions to any variable, prop or constant ending with the suffix `ClassName` or `ClassList`.
