import axios from "axios";
import { CardProps } from "../components/Card";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Divider from "../components/Divider";
import CardsContainer from "../components/CardsContainer";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

  const memeCardsWithRelevantData = getCountriesRelevantCardData(memeCards);

  const navigate = useNavigate();

  const onTestWorkSpaceButtonClick = () => {
    navigate("/test");
  };

  return (
    <>
      <Header
        title="Cards Page"
        paragraph="Here you can find business cards from all categories."
      />
      <Button onClick={onTestWorkSpaceButtonClick}>To Test Workspace</Button>
      <Divider />

      <CardsContainer cards={memeCardsWithRelevantData} />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
