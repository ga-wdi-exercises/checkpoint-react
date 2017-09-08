# React Intro Checkpoint

## React

### Question #1

Edit the snippet below so that two properties – `title` and `author` – are passed down into the `App` component as props. The values that are passed down can be of your choosing.

```js
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
  <App title={"asfd"} author={"asdf"}/>,
  document.getElementById('root')
);
```

### Question #2

Edit the snippet below so that the passed-in properties from the previous question –  `title` and `author` – are rendered in the `App` component's UI.

```js
import React, { Component } from "react"

class App extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to {this.props.title}</h1>
        <footer>This site is designed by {this.props.author}</footer>
      </div>
    )
  }
}

export default App
```

### Question #3

Assume we have defined a component named `Post` that is located in `/js/components/Post.js`. Edit the below code snippet to import the `Post` component and render it as a child within the `Main` UI. `Main` is located in `/js/components/Main.js`.

```js
import React, { Component } from "react"
import Comments from "../Comments"
import Post from "/js/components/Post.js"

class Main extends Component {
  render () {
    return (
      <div>
        <Comments />
        <Post />
      </div>
    )
  }
}

export default Main
```

### Question #4

`Products` receives a prop called `listings`, which contains an array of objects. Each object in `listings` contains a key for `name` (string) and `price` (number). Edit the below code snippet to render a list of `Comment` components that take `name` and `price` as props.

```js
import React, { Component } from "react"
import Products from "../Products"
import Comment from "../Comment"

class Products extends Component {
  render () {
  const products  =  this.props.listings.map((product, index) => {
    return(
      <div key=index>
        <li>  { stock.name }</li>
        <li>  { stock.price }</li>
      </div>
    )
  })




    return (
      <div>
      {products}
      </div>
    )
  }
}

export default Products
```

### Question #5

In the code snippet below we want text entered into the input field to be displayed inside the `<p>`. Do the following things...
- Define a property `message` in the `state` of the `App` component
- Make it so that whenever the form's input is modified, `message` in `state` is updated accordingly

> Hint: `onChange`


```js
import React, { Component } from "react"

class App extends Component {

constructor(){
  super()
  this.state = {
    message: ""
  }
  this.setMessage = this.setMessage.bind(this);
}

setMessage(event){
  this.setState({
    message: {value: event.target.value }
  })

}



  render() {
    return (
      <div>
        <form>
          <label>Input: </label>
          <input type="text" value={this.state.message} onChange={this.setMessage}/>
          <input type="submit" value="Submit" />
        </form>
        <p>Message: { this.state.message }</p>
      </div>
    );
  }
}

export default App
```

## React-Router

### Question #6

You are in your terminal, inside of an existing React application. Enter the command(s) needed to add `React Router` to the current app.

```bash
# your command(s) here
npm install --save react-router-dom
```

### Question #7

Edit the following code snippet. Add the `<Router>` provider component, and rewrite the rest of this snippet to incorporate `<Link/>`s and matching `<Route/>`s. Each `<Route/>` will render a component at a `path` matching its `<Link/>`'s `to` prop (without spaces).

```js
// Assume all necessary components are imported above

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <h1>Welcome to My shopping site</h1>
          <nav>
            <div>  <Link to="/">  Home  </Link>  </div>
            <div>  <Link to="/products">  Products  </Link>  </div>
            <div>  <Link to="/cart">  Shopping Cart  </Link>  </div>
          </nav>

          <div>

          <Route    path="/" component={Home} />
          <Route    path="/products" component={Products} />
          <Route    path="/cart" component={Cart} />


          </div>



          <footer>This site is designed by us</footer>
        </div>
      </Router>
    )
  }
}

export default App
```

### Question #8

Edit the code snippet below so that once the `App` component has loaded, a GET request is made to 'http://api.example.com/info'. Display the results of that request in the provided `<div>`.

> You can use the API tool of your choice to answer this question.

```js
// Assume all necessary components are imported above

class App extends Component {
  // Assume the constructor is complete

constructor(){
  super()

  this.state={
    results: ""
  }
}

  axios.get('http://api.example.com/info')
    .then((response) => {
    this.setState({results: response})
    })
    .catch((error) => {
      console.log(error)
    })


  render () {






    return (
      <div>
        <h1>Results</h1>
        <div>{ this.state.results }</div>
      </div>
    )
  }
}

export default App
```
