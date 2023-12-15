import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactConfirmAlert, {confirmAlert} from 'react-confirm-alert';
import Link from 'next/link';

const OtherModal = () => {
    confirmAlert({
        title: 'Pilih Menu',
        message: 'yang mau kamu tuju.',
        childrenElement: () => (
            <div>
                <Link href='/' className="btn btn-dark mx-2 mt-2 btn-sm">Halaman awal</Link>
                <Link href='/contact' className="btn btn-dark mx-2 mt-2 btn-sm">Contact</Link>
                <Link href='/harga-paket' className="btn btn-dark mx-2 mt-2 btn-sm">Harga Paket</Link>
            </div>
        ),
        confirmLabel: 'Pilih',
        cancelLabel: 'Cancel',
        onConfirm: () => alert('Action after Confirm'),
        onCancel: () => setIsModal(false),
        overlayClassName: "overlay-custom-class-name"
    });
}
 
export default OtherModal;