import "./App.css";
import "./index.css";
const pizzaData = [
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

function Menu() {
  const pizzaMenu = pizzaData;
  const numPizzas = pizzaMenu.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            we are happy to serve you , we will take care of you until you are
            in our restaurant
          </p>
          <ul className="pizzas">
            {pizzaMenu.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are working on our menu</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato ,mozarella,spinach"
        imgName="pizzas/spinaci.jpg"
        price={120}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        imgName="pizzas/margherita.jpg"
        price={200}
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Header() {
  const style = {};
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = 20;
  console.log(hour);
  const openHour = 10;
  const closeHour = 22;
  const isOpen = openHour <= hour && closeHour >= hour;
  // console.log(isOpen);
  // if (isOpen) alert("we are open");
  // else alert("sorry! we are closed now");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour="closeHour" />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="footer-msg">
      <p>
        {new Date().toLocaleTimeString()} we are currently open until{" "}
        {props.closeHour}:00 come visit us and order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
export default App;
