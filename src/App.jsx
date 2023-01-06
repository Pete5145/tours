import React from "react"
import Card from "./components/Card"
import tours from "./tours";

function App() {
  return (
    <section className="container">
      <h1>Tours for 2023</h1>
      <div className="tours">
      {tours.map((tour) => (
      <Card 
        key={tour.id}
        img={tour.img}
        price={tour.price}
        info={tour.info}
        title={tour.title}
      />
    ))}
      </div>
    </section>
  );
}

export default App