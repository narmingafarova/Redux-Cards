import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import cardStore from "./store/cardStore.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./scss/style.scss";
import { addCard } from "./action/cardAction";
import { Provider } from "react-redux";

const mystore = cardStore();

mystore.subscribe(() => {
  console.log(mystore.getState());
});

mystore.dispatch(
  addCard({
    title: "How I Kept My Sense of Humor",
    desc: "Rome wasn’t built in a day (…or during a global pandemic), so give yourself grace on this design journey...",
    info: "It’s remarkable to watch a five-year-old draw, void of any anxiety about what the world will think. We all start our lives creatively confident, happy to create and share our work with pride. And then, as we age, our comfort with creative expression declines. We’re discouraged by the learning curve of creative skills and tools, by our tendency to compare ourselves to others, and by the harsh opinions of critics. As Picasso famously quipped, “All children are born artists, the problem is to remain an artist as we grow up.”",
    photo:
      "https://frenify.com/work/envato/frenify/wp/salla/1/wp-content/uploads/2023/03/24.jpg",
    date: "Jan 5",
    category: "Food",
    view: "1.4K",
  })
);

mystore.dispatch(
  addCard({
    title: "Leaving San Francisco",
    desc: "With the great indoors being our new travel destination of choice, I am in full support of adding some green.",
    info: "It’s remarkable to watch a five-year-old draw, void of any anxiety about what the world will think. We all start our lives creatively confident, happy to create and share our work with pride. And then, as we age, our comfort with creative expression declines. We’re discouraged by the learning curve of creative skills and tools, by our tendency to compare ourselves to others, and by the harsh opinions of critics. As Picasso famously quipped, “All children are born artists, the problem is to remain an artist as we grow up.”",
    photo:
      "https://frenify.com/work/envato/frenify/wp/salla/1/wp-content/uploads/2023/03/5.jpg",
    date: "Jan 5",
    category: "Travel",
    view: "1.3K",
  })
);

mystore.dispatch(
  addCard({
    title: "What Marriage Means to Me",
    desc: "Priding myself on being a seriously awesome gift giver (#HumbleBrag), I was confident I was giving couples...",
    info: "It’s remarkable to watch a five-year-old draw, void of any anxiety about what the world will think. We all start our lives creatively confident, happy to create and share our work with pride. And then, as we age, our comfort with creative expression declines. We’re discouraged by the learning curve of creative skills and tools, by our tendency to compare ourselves to others, and by the harsh opinions of critics. As Picasso famously quipped, “All children are born artists, the problem is to remain an artist as we grow up.”",
    photo:
      "https://frenify.com/work/envato/frenify/wp/salla/1/wp-content/uploads/2023/03/8.jpg",
    date: "Jan 5",
    category: "Lifestyle",
    view: "888",
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>
);
