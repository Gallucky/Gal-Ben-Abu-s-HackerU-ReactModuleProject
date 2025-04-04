import { NavbarLinkProps } from "./components/NavbarLink";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CustomFooter from "./components/CustomFooter";
import CardsContainer from "./components/CardsContainer";
import { CardProps } from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [memeCards, setCountries] = useState<TCountryData[]>();

  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
      );
      console.log("Response:\n", response.data);
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  type TCountryData = {
    address: {
      street?: string;
      city?: string;
      country?: string;
    };
    image: {
      alt?: string;
      url?: string;
    };
    __v?: string;
    description?: string;
    title?: string;
    subtitle?: string;
    phone?: string;
  };

  const getCountriesRelevantCardData = (
    responseData?: TCountryData[],
  ): CardProps[] => {
    if (!responseData) return [];

    const res: CardProps[] = [];
    responseData.map((item) => {
      const street = item.address.street ?? "Unknown";
      const city = item.address.city ?? "Unknown";
      const country = item.address.country ?? "Unknown";
      const cardNumber = item.__v ?? "Unknown";
      const description = item.description ?? "Unknown";
      const title = item.title ?? "Unknown";
      const subtitle = item.subtitle ?? "Unknown";
      const phone = item.phone ?? "Unknown";
      const imgSrc = item.image.url ?? "";
      const imgAlt = item.image.alt ?? "The card's image.";

      const relevantCardData: CardProps = {
        address: street + ", " + city + ", " + country,
        cardNumber: cardNumber,
        description: description,
        title: title,
        subTitle: subtitle,
        phone: phone,
        imgSrc: imgSrc,
        imgAlt: imgAlt,
      };

      res.push(relevantCardData);
    });

    return res;
  };

  useEffect(() => {
    getCountries();
  }, []);

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

  const memeCardsWithRelevantData = getCountriesRelevantCardData(memeCards);

  return (
    <>
      <main className="xs size-full bg-teal-100 dark:bg-slate-900">
        <Navbar links={links} />
        <Header />
        <Divider />

        <CardsContainer cards={memeCardsWithRelevantData} />
        <br />
        <br />
        <br />

        <CustomFooter />
      </main>
    </>
  );
};

export default App;
