import axios from "axios";
import { CardProps } from "../components/card/Card";
import { useEffect, useState } from "react";
import Header from "../components/other/Header";
import Divider from "../components/other/Divider";
import CardsContainer from "../components/card/CardsContainer";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { TCardData } from "../types/card.t";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { userActions } from "../store/userSlice";
import { Token } from "../types/token.t";

const Home = () => {
  const dispatch = useDispatch();
  const [memeCards, setCards] = useState<TCardData[]>();

  /**
   * This method will try to request the cards from the api.
   * If the request succeeds the server response will be saved in the state.
   */
  const getCards = async () => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
      );
      setCards(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Checking if the user is already connected.
  useEffect(() => {
    const checkUserIsLoggedIn = async () => {
      const token = localStorage.getItem("token");
      // If there is no token exit the method.
      if (!token) return;

      // Parsing the token.
      const parsedToken = jwtDecode(token) as Token;

      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = token;

      // Getting the user data.
      const user = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${parsedToken._id}`,
      );

      if (user) {
        dispatch(userActions.login(user.data));
        dispatch(userActions.showWelcomeBackMessage());
      }
    };

    checkUserIsLoggedIn();
  }, [dispatch]);

  /**
   * This method is used to convert the cards received from the server / api to an array
   * of objects (@see CardProps) used to create and render all of the cards.
   * @see Card component.
   * @param responseData The cards in the response from the server / api.
   * @returns Array of objects containing all the necessary card component attributes - CardProps.
   */
  const getRelevantCardData = (responseData?: TCardData[]): CardProps[] => {
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

  // Requesting to get the cards from api on mount.
  useEffect(() => {
    getCards();
  }, []);

  document.body.style.overflowX = "hidden";

  // Getting the converted cards array ready for components creation.
  const memeCardsWithRelevantData = getRelevantCardData(memeCards);

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
