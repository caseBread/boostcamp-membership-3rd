import XMarkImg from "../../image/x-mark.svg";

function ImgBundle({ id, result, onRemove }) {
  return (
    <div className="img-bundle">
      <img className="img-preview" src={result} alt="" />
      <button className="x-button" type="button" onClick={() => onRemove(id)}>
        <img src={XMarkImg} alt="" />
      </button>
    </div>
  );
}

export default ImgBundle;
