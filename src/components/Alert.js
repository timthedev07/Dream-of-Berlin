export default function Alert(props) {
  const handleClick = () => {
    props.setActive(false);
  };

  return (
    <div
      className={`custom-alert custom-alert-${props.type} ${
        props.active ? "alert-active" : "alert-inactive"
      }`}
    >
      <p>{props.text}</p>
      <img
        src="/images/icons/close.svg"
        alt=""
        onClick={() => handleClick()}
        className="close-icon"
      />
    </div>
  );
}
