import "./Square.scss";

const Square = ({ value, handleClick }) => {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
