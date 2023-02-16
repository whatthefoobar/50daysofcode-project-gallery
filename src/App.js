import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { projects, responsive } from "./data";

export default function App() {
  const product = projects.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      img={item.img}
      code={item.code}
      preview={item.preview}
    />
  ));

  return (
    <div className="App">
      <h1>50 projects gallery</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
