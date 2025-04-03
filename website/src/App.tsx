import { NavbarLinkProps } from "./components/NavbarLink";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CustomFooter from "./components/CustomFooter";
import CardsContainer from "./components/CardsContainer";
import { CardProps } from "./components/Card";

function App() {
  document.body.style.overflowX = "hidden";

  const links: NavbarLinkProps[] = [
    { href: "#", text: "Signup" },
    { href: "#", text: "Login" },
  ];

  const sampleCards: CardProps[] = [
    {
      title: "John's Coffee Shop",
      description: "A cozy coffee shop offering the best espresso in town.",
      phone: "+1-555-1234",
      address: "123 Main St, New York, NY",
      cardNumber: "C00123",
    },
    {
      title: "Tech Haven",
      description: "Your one-stop shop for the latest gadgets and accessories.",
      phone: "+1-555-5678",
      address: "456 Innovation Blvd, San Francisco, CA",
      cardNumber: "C00456",
    },
    {
      title: "Green Earth Nursery",
      description: "Providing a variety of plants and gardening supplies.",
      phone: "+1-555-9876",
      address: "789 Greenway Rd, Austin, TX",
      cardNumber: "C00789",
    },
    {
      title: "Smith & Co. Law Firm",
      description: "Expert legal advice and representation for all cases.",
      phone: "+1-555-3456",
      address: "321 Justice Ave, Chicago, IL",
      cardNumber: "C00321",
    },
    {
      title: "Sunshine Gym",
      description:
        "A state-of-the-art fitness center with personal training services.",
      phone: "+1-555-6789",
      address: "852 Workout St, Los Angeles, CA",
      cardNumber: "C00852",
    },
  ];

  return (
    <>
      <main className="size-full bg-teal-100 dark:bg-slate-900">
        <Navbar links={links} />
        <Header />
        <Divider />

        <CardsContainer cards={sampleCards} />
        <br />
        <br />
        <br />

        <CustomFooter />
      </main>
    </>
  );
}

export default App;
