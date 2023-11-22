// import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactConfirmAlert, {confirmAlert} from 'react-confirm-alert';
import Link from 'next/link';

const Modal = (onConfirm, onCancel, setIsModal) => {
    confirmAlert({
        title: 'Pilih Menu',
        message: 'yang mau kamu tuju.',
        childrenElement: () => (
            <div>
                <Link href='/' className="btn btn-primary mx-2 mt-2 btn-sm">Halaman awal</Link>
                <Link href='#section-home' className="btn btn-primary mx-2 mt-2 btn-sm">Home</Link>
                <Link href='#reguler-food' className="btn btn-primary mx-2 mt-2 btn-sm">Reguler Food</Link>
                <Link href='#our-menu' className="btn btn-primary mx-2 mt-2 btn-sm">Our menu</Link>
                <Link href='#other-services' className="btn btn-primary mx-2 mt-2 btn-sm">Other Services</Link>
            </div>
        ),
        confirmLabel: 'Pilih',
        cancelLabel: 'Cancel',
        onConfirm: () => alert('Action after Confirm'),
        onCancel: () => setIsModal(false),
        overlayClassName: "overlay-custom-class-name"
    });
}

export default Modal;