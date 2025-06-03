import { BsPlusCircleFill } from "react-icons/bs";
import useAuth, { CreateCardFormData } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "flowbite-react";
import Divider from "../../components/other/Divider";
import LocationSection from "./Location.section";
import { useForm } from "react-hook-form";
import TitleSubtitleSection from "./TitleSubtitle.section";
import DescriptionSection from "./Description.section";
import ContactSection from "./Contact.section";
import ImageSection from "./Image.section";
import { joiResolver } from "@hookform/resolvers/joi";
import { createCardSchema } from "../../validations/createCard.joi";

const defaultValues = {
  title: "",
  subtitle: "",
  description: "",
  phone: "",
  email: "",
  web: "",
  image: {
    url: "",
    alt: "",
  },
  address: {
    city: "",
    country: "",
    state: "",
    street: "",
    houseNumber: 0,
    zip: 0,
  },
};

type CreateCardProps = {
  onCreatedCard?: (cratedNewCard: boolean) => void;
};

const CreateCard = (props: CreateCardProps) => {
  const { onCreatedCard = () => false } = props;
  const { user, cardCreationRequest } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
    reset,
  } = useForm<CreateCardFormData>({
    defaultValues,
    mode: "onChange",
    resolver: joiResolver(createCardSchema),
  });

  useEffect(() => {
    trigger(); // ⬅️ Trigger validation on load
  }, [trigger, reset]);

  // If there is no user / guest user or there is a user
  // without business permissions return an empty fragment.
  if (!user || !user.isBusiness) return <></>;

  const backgroundColors = "bg-white dark:bg-gray-700";

  return (
    <>
      <BsPlusCircleFill
        size="100px"
        color="gray"
        className="fixed bottom-20 right-28 transition-all hover:scale-90 hover:cursor-pointer"
        onClick={() => {
          setOpenModal(true);
          trigger();
        }}
      />

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => {
          reset();
          setOpenModal(false);
          onCreatedCard(true);
        }}
      >
        <form
          id="create-card-form"
          onSubmit={handleSubmit(cardCreationRequest)}
        >
          <ModalHeader className="overflow-hidden">
            Create a New Card
          </ModalHeader>
          <ModalBody>
            {/* Title and Subtitle */}
            <TitleSubtitleSection
              backgroundColors={backgroundColors}
              register={register}
              errors={errors}
              watch={watch}
            />
            <Divider margin="my-4" />
            {/* Description */}
            <DescriptionSection
              backgroundColors={backgroundColors}
              register={register}
              errors={errors}
              watch={watch}
            />
            <Divider margin="my-4" />
            {/* Phone, Email, Web */}
            <ContactSection
              backgroundColors={backgroundColors}
              register={register}
              errors={errors}
              watch={watch}
            />
            <Divider margin="my-4" />
            {/* Image URl and Alt */}
            <ImageSection
              backgroundColors={backgroundColors}
              register={register}
              errors={errors}
              watch={watch}
            />
            <Divider margin="my-4" />
            {/* City, Country, State */}
            <LocationSection
              backgroundColors={backgroundColors}
              register={register}
              errors={errors}
              watch={watch}
            />
          </ModalBody>
          <ModalFooter className="z-10 overflow-hidden">
            <Button type="submit" disabled={!isValid}>
              Create
            </Button>
            <Button
              className="dark:hover:!bg-gray-600"
              color="gray"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default CreateCard;
