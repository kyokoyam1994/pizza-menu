import "./index.css";

interface Pizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

const pizzaData: Pizza[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12; // Open 12PM~10PM
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>{`We're happy to welcome you between ${openHour}:00 to ${closeHour}:00.`}</p>
      )}
    </footer>
  );
}

interface OrderProps {
  closeHour: number;
}

function Order({ closeHour }: OrderProps) {
  return (
    <div className="order">
      <p>{`We're currently open until ${closeHour}:00. Come visit us or order online.`}</p>
      <button className="btn">Order</button>
    </div>
  );
}

interface PizzaProps {
  pizza: Pizza;
}

function Pizza({ pizza }: PizzaProps) {
  return (
    <li className={`pizza ${pizza.soldOut ? "pizza sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name}></img>
      {/* Inserted div */}
      <div style={{ flexDirection: "column" }}>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

export default App;
