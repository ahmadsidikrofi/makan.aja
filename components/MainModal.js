// import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactConfirmAlert, {confirmAlert} from 'react-confirm-alert';
import Link from 'next/link';

const MainModal = (onConfirm, onCancel, setIsModal) => {
    confirmAlert({
        title: 'Tipe makanan',
        message: 'yang cocok untukmu.',
        childrenElement: () => (
            <div>
                <Link href="/regulerFood" className="btn-sm mt-3 btn btn-dark p-2 mx-1"> Standard Menu</Link>
                <Link href="/dietFood" className="btn-sm mt-3 btn btn-dark p-2 mx-1"> Diet Menu</Link>
            </div>
        ),
        confirmLabel: 'Standard Menu',
        cancelLabel: 'Diet Menu',
        onConfirm: () => setIsModal(false),
        onCancel: () => setIsModal(false),
        overlayClassName: "overlay-custom-class-name"
    });
}

export default MainModal;