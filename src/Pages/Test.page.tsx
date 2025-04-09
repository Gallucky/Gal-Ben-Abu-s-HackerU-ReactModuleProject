import axios from "axios";
import Card, { CardProps } from "../components/Card";
import { useEffect, useState } from "react";
import CardsContainer from "../components/CardsContainer";

const Test = () => {
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

  return (
    <>
      <br />
      <br />
      <CardsContainer cards={memeCardsWithRelevantData} />
      {/* <div className="m-[10%] flex items-center justify-center self-center justify-self-center">
        <Card
          title={"John Doe's Business Card"}
          subTitle={"CEO at ExampleCorp"}
          description={
            "This is a detailed description of John Doe, a passionate entrepreneur with a deep background in tech, business development, and leadership. Over the years, he has worked with several startups and has been instrumental in the growth of ExampleCorp. His leadership style emphasizes innovation, creativity, and problem-solving. John is always looking for new challenges and opportunities to improve processes and make a meaningful impact in the tech industry."
          }
          phone={"+1 (555) 123-4567"}
          address={
            "1234 Long Street Name That Keeps Going and Going, Suite 500, Some City, Some State, 12345-6789, Country Name"
          }
          cardNumber={"9876 5432 1098 7654"}
          imgSrc={"https://picsum.photos/200/300"}
          imgAlt={"John Doe's Profile Picture"}
        />
      </div> */}
      <br />
      <br />
    </>
  );
};

export default Test;
