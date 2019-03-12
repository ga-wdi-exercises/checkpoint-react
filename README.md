# Checkpoint: React

## Setup

Fork and clone this repo.

**Before you begin anything, run `npm install`.**

## Before You Begin

Every component has a test suite associated with it. There are 18 tests in
total, grouped into 5 suites.

To run the tests in the terminal, run `npm test`. The tests will rerun every
time you save a file. When running `npm test` in the root of the repo there is
an prompt to run all of the tests by entering `a`.

When you start, all of the tests will be failing; your goal is to make as many
pass as you can in the hour provided.

> HINT: read the output of the failing tests.

> Don't write anything in the `.test.js` files.

## Instructions

You're going to build a simple contact list manager using React and React
Router. An initial set of contacts has been provided in `contacts.json` and some
CSS has been provided in `src/styles/index.css`.

> See a demo of the final app at
> [http://quickest-beam.surge.sh/](http://quickest-beam.surge.sh/)

Add Tweety as a contact in `contacts.json`:

```
{
  name: "Tweety",
  email: "tweety@gmail.com",
  profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
}
```

### Setup

Inside `index.js`, import React Router and pass it to `ReactDOM.render()` as the
root component with `<App>` as a child component. We've imported the starter
contacts for you, pass these in to your `<App>` component as a prop, `contacts`.

### `<App>`

Your `<App>` component should accept `contacts` as a prop and use them to set
the initial state for your component. Setting props as initial state looks like
this:

```js
constructor(props) {
  super(props)

  this.state = {
    contacts: props.contacts
  }
}
```

Your `<App>` component should also render:

- A div with a class name of `'App'`
- Your `<Header>` component
- Two `<Route />` components
- If the route is `"/"` then render the `<ContactList>` component; if the route
  is `"/new-contact"` then render the `<NewContact>` component;

### `<Header>`

Your `<Header>` component should render:

- A `<header>` element with an `<h1>`
- A `<nav>` containing two React Router `<Link>`s, one to the homepage (`"/"`)
  and the other to create a new contact (`"/new-contact"`).

### `<ContactList>`

`<ContactList>` should take `contacts` as a prop

It should render:

- A `<Contact>` component for each contact object inside of the `contacts` prop.
- A `<div>` with a class of `contact-list`.

### `<Contact>`

Your `<Contact>` component will render a single contact.

It should render:

- An outer `<div>` with a class of `contact`
- An include an `<img>` for the `profile_picture`,
- `<h3>` for the `name`
- `<h4>` for the `email`.

### `<NewContact>`

Your `<NewContact>` component should render:

- An `<h1>` with a text of `New Contact`
- A form with inputs for the `name`, `email` and `profile_picture`.

When submitted, you should save the new contact by updating your state inside of
`<App>` and redirect the user back to the homepage/list of contacts.

## Rubric

- App component is defined and exported
- App component accepts the `contacts` json objects as a prop and the `contacts`
  json object is properly passed
- Router is defined and setup using the browser History API
- Router includes a route for the homepage (`"/"`) and for the new contact page
  (`"/new-contact"`)
- Header component is defined and exported
- Header component contains a title and two `<Link>`s, one to the homepage and
  the other to the new contact page
- ContactList component is defined and exported
- ContactList component iterates through the contacts, rendering a Contact
  component for each
- Contact component is defined and exported
- Contact component is rendering the image, name and email address of a contact
- NewContact is defined and exported
- NewContact contains a form that adds a new contact to the parent App component
  state
