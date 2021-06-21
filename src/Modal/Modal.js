import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({src, alt, onClick}) => {
    return createPortal(
        <div className="Overlay" onClick={onClick}>
        <div className="Modal">
            <img src={src} alt={alt} />
        </div>
        </div>, modalRoot)
}