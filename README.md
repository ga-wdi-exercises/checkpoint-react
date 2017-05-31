# React Intro Checkpoint

## React

### Question #1

Edit the snippet below. Pass default properties into the `App` component, named `title` & `author`. Choose your own values to pass down, make sure they're valid.

```js
// assume necessary modules/components are already imported above
ReactDOM.render(
  <App title ={"wdi"} author={"Andy"}/>,
  document.getElementById('root')
);
```

### Question #2

Edit the snippet below. Display the passed in properties `title` & `author` in an appropriate part of the template.

```js
// assume Component is imported above
class App extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to</h1>
        <h1>{this.props.title}</h1>
        <h1>{this.props.author}</h1>
        <footer>This site is designed by</footer>
      </div>
    )
  }
}
// assume we are exporting correctly below
```

### Question #3

Given a component named `Post` located in `/js/components/Post/Post.js`. Edit the below code snippet to import the `Post` component and render it as a child within `Main`'s display (`Main` is located in `/js/components/Main/Main.js`).

```js
// assume Component and Comments are imported above
import Post from './Post/Post.js'
class Main extends Component {
  render () {
    return (
      <div>
        <Comments  />
      </div>
    )
  }
}
// assume we are exporting correctly below
```

### Question #4

Products receives a property called `listing` containing an array of objects. Each object contains a key for `name` (a string) and `price` (a number). Edit the below code snippet to render a list of `Comment` components that take `name` and `price` as incoming properties.

```js
// assume Component and Product are imported above
class Products extends Component {
  render () {
    let listing = this.props.comments.map(name, price)=>(
      Comment body = {name} key ={pirce}
    )

    return (
      <Comment body = {this.props.Comment}/>
      <Comment price = {this.props.Comment}
      <div/>
    )
  }
}
// assume we are exporting correctly below
```

### Question #5

In the code snippet below we want text entered into the input field to be displayed inside the `<p>`. Set up the state variable and add logic to update it as characters are typed.

```js
// assume all necessary components are imported above
class App extends Component {
  constructor (props) {
    super()
    this.state = {
      message = 'i found out this is great';
    }
  }
  render() {
    return (
      <div>
        <form>
          <label>Input: </label>
          <input type="text" />
        </form>
        <p>Message: { this.state.message }</p>
      </div>
    );
  }
}
// assume we are exporting correctly below
```

## React-Router

### Question #6

You are in your terminal, inside of an existing react application. Enter the command(s) needed to add `React Router` to the current app.

```bash
# your command(s) here

import  {
  BrowserRouter as Router,
  Router,
  Link,
} from 'react-router-dom'
```

### Question #7

Edit the following code snippet. Add the Router component, and rewrite the rest of this snippet to incorporate Links and matching Routes. Each route will render a component matching it's link text (without spaces).

```js
// assume all necessary components are imported above
class App extends Component {
  render () {
    return (
      <Router>
      <div>
        <h1>Welcome to My shopping site</h1>
        <nav>
          <Link to="/" Component {Home}>Home</Link>
          <Link to="/products" Component{ product}>Products</Link>
          <Link to="/cart" Component {cart}>Shopping Cart</Link>
        </nav>
        <main/>
        <footer>This site is designed by us</footer>
      </div>
      </Router>
    )
  }
}
// assume we are exporting correctly below
```

### Question #8

Edit the code snippet below. Only once when the component has loaded, make an AJAX GET request to 'http://api.example.com/info' and display the results in the provided `<div>`.

```js
// assume all necessary components are imported above
class App extends Component {
  // assume the constructor is complete
  render () {
    axion.get('http://api.example.com/info')
    .then((response) =>{
      console.log("response")
    })
    return (
      <div>
        <h1>Results</h1>
        <div>{ this.state.results }</div>
      </div>
    )
  }
}
// assume we are exporting correctly below
```
