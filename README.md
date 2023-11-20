# Hosted Link : https://terriblytinytales-profile-page.netlify.app
### Libraries Used
1.The `react-spring` library serves the purpose of enabling transitions for React components.

2.For icons within React applications utilized the `react-icons` library.

3.`react-router-dom` facilitates navigation within applications by utilizing components such as BrowserRouter, Routes, Route, and NavLink.

 ### Components
 - Navbar: `NavBar` is the compnent containing navigation bar 
* Home :`Home` this components contains the user information like followers,follwing ,other handles.
+ Posts: `Post` this components contains the posts posted by the user that posts where extracted form the array of objects locally.Here with help of react-spring i implemented the smooth transition of loading the elements
 - gallery : `gallery` this contains the pictures that was posted by the user
   
The `<Routes>` component is a part of React Router, used for defining the different routes with in  application. Inside it, there are three `<Route>` components:

`<Route path="/posts" element={<Posts />} />`: This sets up a route that corresponds to the URL path "/posts" and renders the <Posts /> component when this path is matched.
`<Route path="/gallary" element={<Gallery />} />`:  this sets up a route for the "/gallery" path and renders the <Gallery /> component when this path is matched.
`<Route path="*" element={<Notfound />} />`: This route matches any path that hasn't been defined previously. It's often used as a catch-all for showing a "Not Found" or error page, rendering the <Notfound /> component when no other routes match.

- The `<NavLink>` component is a part of React Router that helps create navigation links. In this case, it's creating a link to the "/posts" path. The to="/posts" attribute specifies where the link should navigate to when clicked (in this case, the "/posts" path).

## Data Storage 
Used `array of objects ` to store the retrive the data .the using `map()` function render posts in `<Posts/>` component.the `map()` function on the posts array.
- The `map()` function in JavaScript is used to iterate through each element of an array. In this case, for each post in the posts array, it seems to be performing some operation or rendering based on the code that follows this snippet  
## This  structure of the data that is stored locally 
```
export const data = [
  {
    Followers: 6482,
    Following: 245,
    Stars: 125,
    Likes: 12,
    Views: 57.8,
    Favoutites: 26.0,
    CountOfPosts: 134,
    Posts: [
      {
        Title: "A Changing World Order",
        Body: "The world is changing at feverish pace friends and colleagues and everyone engaged in knowledge work or beginning to sense this including ....",
        Type: "musing",
        PostedBy: "anujgosalia",
        TimeStats: {
          Month: "August",
          Date: "2",
          TimeToRead: "5 mins",
          NumberOfViews: 500,
        },
      },
    ],
  },
];
```

### Aninamtions using react-spring

```
  const transApi = useSpringRef();
  const transition = useTransition(pictures, {
    // from: { y: 100 },
    //   to: { y: 0 },
    ref: transApi,
    trail: 400 / pictures.length,
    from: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 0 },
  });
```

### 1. Hooks used from react-spring

- `useSpringRef()` creates a reference that can be passed to the useTransition() hook.
- `useTransition()` is used to animate a list of items.
### 2. transition Object
The transition object is created using useTransition():

- `pictures`: It seems to be an array of items to animate.
- `ref`: transApi: It's using a reference transApi created by useSpringRef().
- `trail`: 400 / pictures.length: Specifies the spacing between individual animations.
- `from`: Initial style properties of the animated elements (opacity: 0, y: 100).
- `enter`: Style properties when elements enter the view (opacity: 1, y: 0).
- `leave`: Style properties when elements leave the view (opacity: 0, y: 0).
### 3. transition() Function
```
  <div class="photos">
      {transition((style, item) => (
        <animated.div style={{ ...style }}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </animated.div>
      ))}
    </div>
```

This function is used to render the animated elements based on the transition object:

It takes a function that receives style (the animated styles) and item (each item from pictures).
Inside the function, it renders an <animated.div> using style from react-spring.
Inside the <animated.div>, it renders an <img> element with src and alt attributes taken from each item in the pictures array. The loading="lazy" attribute is used for lazy loading images.

 

 

