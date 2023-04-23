const Card = (props) => {
  const { icon, title } = props;
  return (
    <section className="flex flex-col font-bold items-center text-xs md:text-lg justify-center rounded-xl w-[120px] sm:w-[150px] h-36 m-1">
      {icon}
      <p className="mt-2">{title}</p>
    </section>
  );
};

export default Card;
