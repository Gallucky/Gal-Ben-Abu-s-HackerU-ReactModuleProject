type CardsNotFoundProps = {
  message: string;
  hint?: string;
  messageClassName?: string;
  hintClassName?: string;
  className?: string;
};

const cardsNotFound = (props: CardsNotFoundProps) => {
  const { message, hint, messageClassName, hintClassName, className } = props;

  return (
    <div
      className={`mt-10 flex h-fit flex-col items-center justify-center gap-2 ${className}`}
    >
      <h2
        className={`form-fluid-text place-self-center text-center font-serif font-bold text-gray-500 dark:text-gray-300 ${messageClassName}`}
      >
        {message}
      </h2>
      <p
        className={`font-serif text-lg text-gray-500 dark:text-gray-300 ${hintClassName}`}
      >
        {hint}
      </p>
    </div>
  );
};

export default cardsNotFound;
