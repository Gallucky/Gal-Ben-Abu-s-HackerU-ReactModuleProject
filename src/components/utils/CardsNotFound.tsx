type CardsNotFoundProps = {
  message: string;
  hint?: string;
};

const cardsNotFound = (props: CardsNotFoundProps) => {
  const { message, hint } = props;

  return (
    <div className="mt-10 flex h-fit flex-col items-center justify-center gap-2">
      <h2 className="form-fluid-text place-self-center text-center font-serif font-bold text-gray-500 dark:text-gray-300">
        {message}
      </h2>
      <p className="font-serif text-lg text-gray-500 dark:text-gray-300">
        {hint}
      </p>
    </div>
  );
};

export default cardsNotFound;
