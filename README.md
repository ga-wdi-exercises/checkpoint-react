# React Intro Checkpoint

## Before you Begin

**Be sure to run `npm install` before beginning to work on the checkpoint.**

## Instructions

You're going to build a simple contact list manager using React and React Router. An initial set of contacts has been provided in `contacts.json` and some CSS has been provided in `src/styles/index.css`.

> See a demo of the final app at [http://quickest-beam.surge.sh/](http://quickest-beam.surge.sh/)

Add Tweety as a contact:

```
{
  name: "Tweety",
  email: "tweety@gmail.com",
  profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
}
```

### Setup

Inside `index.js`, import React Router and pass it to `ReactDOM.render()` as the root component with `<App>` as a child component. We've imported the starter contacts for you, pass these in to your `<App>` component as a prop, `contacts`.

### `<App>`

Your `<App>` component should accept `contacts` as a prop and use them to set the initial state for your component. It should render a div with a class name of `'App'`, your `<Header>` component and then either your `<ContactList>` or `<NewContact>` component, depending on the route.

If the route is `"/"` then render the `<ContactList>` component; if the route is `"/new-contact"` then render the `<NewContact>` component;

### `<Header>`

Your `<Header>` component should render a `<header>` element with an `<h1>` and a `<nav>` containing two React Router links, one to the homepage (`"/"`) and the other to create a new contact (`"/new-contact"`).

### `<ContactList>`

Your `<ContactList>` component should render as the homepage of your app. It should render a `<div>` with a class of `contact-list`. It should take `contacts` as a prop and render a `<Contact>` component for each contact object inside of the `contacts` prop.

### `<Contact>`

Your `<Contact>` component will render a single contact. It should contain an outer `<div>` with a class of `contact` and include an `<img>` for the profile picture, `<h3>` for the name, and `<h4>` for the email address.

### `<NewContact>`

Your `<NewContact>` component should render an `<h1>` with a text of `New Contact` and a form with inputs for the `name`, `email` and `profile_picture`.

When submitted, you should save the new contact by updating your state inside of `<App>` and direct the user back to the homepage/list of contacts.