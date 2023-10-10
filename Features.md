
1. Added pages for routing
2. Added components for Header/Navbar, Profile page etc
3. Added next-auth using Google OAuth
4. Wrapped the session provider provided by next-auth around the complete website so that they
   can manage the session
5. Added the Header component provided by MUI
6. Integrated the sign in and signout functionality with MUI Header component
7. Removed the default stylesheets
8. Added the CssBaseline to add the basic styling to the website at root level
9. Added the dark and light theme by using ThemeOptions, and wrapping the components at parent
   level with the Theme provider where the theme change is required.
10. The theme works in a way that it is stored in a context and there is a toggle functionality
    which is created inside a component, so a function is called and the theme is updated.
    We can create different themes in files and use them while generating the context and toggler