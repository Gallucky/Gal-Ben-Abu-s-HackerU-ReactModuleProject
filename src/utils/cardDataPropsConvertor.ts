import { CardProps } from "../components/card/Card";
import { TCardData } from "../types/card.t";

export const convertCardDataToProps = (arr: TCardData[]): CardProps[] => {
  const res: CardProps[] = [];
  arr.map((item) => {
    // Getting the relevant data from the server response.
    const street = item.address.street ?? "Unknown";
    const city = item.address.city ?? "Unknown";
    const country = item.address.country ?? "Unknown";
    const cardNumber = item.__v ?? -1;
    const description = item.description ?? "Unknown";
    const title = item.title ?? "Unknown";
    const subtitle = item.subtitle ?? "Unknown";
    const phone = item.phone ?? "Unknown";
    const imgSrc = item.image.url ?? "";
    const imgAlt = item.image.alt ?? "The card's image.";
    const _id = item._id ?? "Unknown";

    const relevantCardData: CardProps = {
      _id: _id,
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

  return [...res];
};
