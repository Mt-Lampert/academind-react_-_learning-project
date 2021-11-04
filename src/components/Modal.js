import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Error Title</h2>
        </div>
        <div className="modal-body">Error: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div className="modal-footer"><button>Okay</button></div>
      </div>
    </div>
  );
};

export default Modal;
