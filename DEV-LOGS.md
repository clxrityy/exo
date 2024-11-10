# Developer logs
> Logging all important notes, changes, and ideas by date

- [Nov. 6th, 2024](#nov-6th-2024)
- [Nov. 7th, 2024](#nov-7th-2024)
- [Nov. 8th, 2024](#nov-8th-2024)
- [Nov. 9th, 2024](#nov-9th-2024)
- [Nov. 10th, 2024](#nov-10th-2024)

---

## Nov. 6th, 2024


- Created the next app with `pnpm`
- Installed [next-themes](https://github.com/pacocoursey/next-themes)
    - Set up a **ThemeProvider** and **ThemeToggle** to switch between modes
        - Default is system
- Installed [shadcn](https://ui.shadcn.com/) & added components
    - The important one I needed to use was the new [`<Sidebar />`](https://ui.shadcn.com/docs/components/sidebar) component.
- Set up a boilerplate for the sidebar with no functionality yet
    - [ ] Blogs
        - [ ] History
        - [ ] Bookmarked
        - [ ] Favorited
        - [ ] Trending
        - [ ] Recent
    - [ ] Search
- Began the **Hero** component
    - This will contain the initial display (before blog posts) that entices/hooks the user.

##### Demo so far:

![demo-11-06-2024](https://i.gyazo.com/583682889164e5d45e3564c54aca653a.gif)

- Added sanity
    - Fixed support for react (read [here](https://www.sanity.io/help/react-19))

- Implemented functionality to sanity
    - Ability to make posts
    - Added code blocks & images to the body text
- Mapped through all posts on the main page
- Grouped routes into `(main)` & `(admin)`
    - **main** - The routes accessible to the public
        - View blog posts & main feed
    - **admin** - The */studio* for sanity.io
        - **NOTE**: You can only request access to make a post, this will need to be a big change in the future to allow logins and such.
    - Each group has it's own layout
        - The **main** group layout contains the sidebar
        - The **admin** group layout contains a breadcrumb-like button to navigate back to the main page

##### Demonstration

- `(main)/layout.tsx`
```tsx
<ThemeProvider>
    <SidebarProvider>
        <AppSidebar /> {/* the actual sidebar component */}
        <SidebarTrigger /> {/* triggers sidebar */}
        <Topbar /> {/* contains theme toggler */}
        <main>
            {children}
        </main>
    </SidebarProvider>
</ThemeProvider>
```

- `(admin)/layout.tsx`
```tsx
<ThemeProvider>
    <CmsNavigation /> {/* navigate back to main page & toggle theme */}
    <main>
        {children}
    </main>
</ThemeProvider>
```

> ##### Note that both layout files:
> - Import the same `globals.css` file
> - Contain the essential `<head />` elements
> - Include the `<ThemeProvider />`
> - Export their own metadata

---

## Nov. 7th, 2024

- Added a function to fetch the author of a post
    - Displaying the author on the feed & post page

---

## Nov. 8th, 2024

- Added a page for authors
    - Ideally, clicking the author will lead to all their posts
    - The authors in the future should be displayed with hearts to indicate how many hearts they've gotten on posts, and maybe views

---

## Nov. 9th, 2024
- The author page now includes all their posts
- Created a `/tags` route & created some tags
    - Will be able to browse posts by tag

---

## Nov. 10th, 2024
- Created components for tags
    - **`<Tag />`** - Displays tag, #slug, & number of posts under that tag
        - Will link to a page with all the posts using that tag
    - **`<PostTag />`** - A badge to display the tag on the post & post preview component

#### Issues
- Realizing it's going to be hard to incorporate authentication that is or can be linked to the sanity studio authentication.
    - For favoriting, bookmarking, commenting on posts, etc.
- Hitting a road block with the addition of customizable components to the studio.
- Need a way for everyone to have access to make posts (and maybe tags) without having to request access (sanity)
    - Surely there is a way, I just haven't figured it out yet


##### Demo so far

![demo 2](https://i.gyazo.com/06a05c09843054516c324a0f62decdb0.gif)