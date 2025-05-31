import { BsPlusCircleFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

const CreateCard = () => {
  const { user } = useAuth();

  // If there is no user / guest user or there is a user
  // without business permissions return an empty fragment.
  if (!user || !user.isBusiness) return <></>;

  return (
    <>
      <BsPlusCircleFill
        size="100px"
        color="gray"
        className="absolute bottom-20 right-28 transition-all hover:scale-90 hover:cursor-pointer"
      />
    </>
  );
};

export default CreateCard;
