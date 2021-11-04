import "./Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  // implicit else
  return (
    // toggle modal by clicking on the backdrop
    <div className="modal" onClick={props.hide}>
      <div
        className="modal-content"
        // => prevents closing modal by clicking on the box
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <h2 className="modal-title">{props.data.title}</h2>
        </div>
        <div className="modal-body">
          {props.data.msg}
        </div>
        <div className="modal-footer">
          <button onClick={props.hide}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
