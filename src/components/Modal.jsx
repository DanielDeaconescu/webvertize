import { useEffect, useRef } from 'react';
import { Modal as BSModal } from 'bootstrap';

function Modal({ show, onClose, title, children }) {
  const modalRef = useRef(null);
  const bsModal = useRef(null);

  // Initialize Bootstrap modal instance once
  useEffect(() => {
    bsModal.current = new BSModal(modalRef.current, {
      backdrop: true,
      keyboard: true,
    });

    // Close event listener (when clicking X or pressing ESC)
    modalRef.current.addEventListener('hidden.bs.modal', onClose);
  }, [onClose]);

  // Show/hide when props change
  useEffect(() => {
    if (show) bsModal.current.show();
    else bsModal.current.hide();
  }, [show]);
  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
