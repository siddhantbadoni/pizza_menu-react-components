import "./App.css";
import "./index.css";
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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="spinacci" />
      <h3> Pizza Spinaci </h3>
      <p> Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
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
  // const hour = new Date().getHours;
  // const openHour = 10;
  // const closeHour = 22;
  // const isOpen = openHour <= hour && closeHour >= hour;
  // console.log(isOpen);
  // if (isOpen) alert("we are open");
  // else alert("sorry! we are closed now");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} we are currently open
    </footer>
  );
}
export default App;
