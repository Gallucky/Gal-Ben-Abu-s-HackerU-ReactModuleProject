import { NavbarLinkProps } from "./components/NavbarLink";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CustomFooter from "./components/CustomFooter";
import Card from "./components/Card";

function App() {
  const links: NavbarLinkProps[] = [
    { href: "#", text: "Signup" },
    { href: "#", text: "Login" },
  ];

  return (
    <>
      <main className="h-screen w-screen bg-teal-100 dark:bg-slate-900">
        <Navbar links={links} />
        <Header />
        <Divider />

        <Card
          title="title"
          description="description"
          phone="0540000000"
          address="address"
          cardNumber="1"
        />

        <CustomFooter />
      </main>
    </>
  );
}

export default App;
