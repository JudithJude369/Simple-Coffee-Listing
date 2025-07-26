import bgImgMobile from "@/assets/images/bg-cafe-sm.jpg";
import bgImgTablet from "@/assets/images/bg-cafe.jpg";
import bgImgDesktop from "@/assets/images/bg-cafe-lg.jpg";
import Content from "@/components/Content";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Card from "./components/Card";
import Button from "@/components/Button";

const url =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [filter, setFilter] = useState("all");

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <h2 style={{ textAlign: "center", margin: "5rem auto" }}>
        There was an error...
      </h2>
    );
  }

  const filteredProducts =
    filter === "available"
      ? products.filter((product) => {
          return product.available;
        })
      : products;

  return (
    <main>
      <div>
        <img src={bgImgMobile} alt="cafe" className="imgMobile" />
        <img src={bgImgTablet} alt="cafe" className="imgTablet" />
        <img src={bgImgDesktop} alt="cafe" className="imgDesktop" />
      </div>
      <article className="container">
        <Content />
        <div className="btn-wrapper">
          <Button onClick={() => setFilter("all")}>All Products</Button>
          <Button onClick={() => setFilter("available")}>Available Now</Button>
        </div>

        <div className="card-container">
          {filteredProducts.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </article>
    </main>
  );
};

export default App;
