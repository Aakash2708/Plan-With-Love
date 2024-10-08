import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <h2 className="tittle">Plan With Love</h2>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
