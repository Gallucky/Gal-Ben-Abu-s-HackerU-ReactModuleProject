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
  initialValues?: CreateCardFormData;
  onClose?: () => void;
  cardID?: string;
};

const CreateCard = (props: CreateCardProps) => {
  const { onCreatedCard = () => false, initialValues, cardID } = props;
  const editCardMode = Boolean(initialValues);
  const { user, cardCreationRequest, cardEditRequest } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
    reset,
    setValue,
  } = useForm<CreateCardFormData>({
    defaultValues,
    mode: "onChange",
    resolver: joiResolver(createCardSchema),
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues, { keepValues: true });
      setValue("title", initialValues.title, { shouldValidate: true });
      setValue("subtitle", initialValues.subtitle, { shouldValidate: true });
      setValue("description", initialValues.description, {
        shouldValidate: true,
      });
      setValue("phone", initialValues.phone, { shouldValidate: true });
      setValue("email", initialValues.email, { shouldValidate: true });
      setValue("web", initialValues.web, { shouldValidate: true });
      setValue("image.url", initialValues.image.url, { shouldValidate: true });
      setValue("image.alt", initialValues.image.alt, { shouldValidate: true });
      setValue("address.city", initialValues.address.city, {
        shouldValidate: true,
      });
      setValue("address.country", initialValues.address.country, {
        shouldValidate: true,
      });
      setValue("address.state", initialValues.address.state, {
        shouldValidate: true,
      });
      setValue("address.street", initialValues.address.street, {
        shouldValidate: true,
      });
      setValue("address.houseNumber", initialValues.address.houseNumber, {
        shouldValidate: true,
      });
      setValue("address.zip", initialValues.address.zip, {
        shouldValidate: true,
      });
      setOpenModal(true);
      trigger();
    } else {
      reset(defaultValues);
    }
  }, [initialValues, trigger, reset, setValue]);

  // If there is no user / guest user or there is a user
  // without business permissions return an empty fragment.
  if (!user || !user.isBusiness) return <></>;

  const backgroundColors = "bg-white dark:bg-gray-700";

  const onClose = props.onClose || (() => {});

  return (
    <>
      <BsPlusCircleFill
        size="100px"
        color="gray"
        className="fixed bottom-12 transition-all hover:scale-90 hover:cursor-pointer max-md:inset-x-1/2 max-md:size-[64px] max-md:-translate-x-1/2 md:bottom-16 md:right-28"
        onClick={() => {
          setOpenModal(true);
          trigger();
        }}
      />

      <Modal
        show={openModal}
        onClose={() => {
          setOpenModal(false);
          onClose();
        }}
        onSubmit={() => {
          reset();
          setOpenModal(false);
          onCreatedCard(true);
        }}
      >
        <form
          id="create-card-form"
          onSubmit={
            editCardMode && cardID
              ? handleSubmit((formData) => cardEditRequest(cardID, formData))
              : handleSubmit(cardCreationRequest)
          }
        >
          <ModalHeader className="overflow-hidden">
            {editCardMode ? "Edit Card" : "Create a New Card"}
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
              {editCardMode ? "Save Changes" : "Create"}
            </Button>
            <Button
              className="dark:hover:!bg-gray-600"
              color="gray"
              onClick={() => {
                setOpenModal(false);
                onClose();
              }}
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
