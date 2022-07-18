import './UserModal.style.scss';
import { Login } from '../../Login';

export const UserModal = (props: any) => {
  const { open, close } = props;
  return(
    <article className={open ? 'openModal modal' : 'modal'}>
      <section className="modal-body">
        <Login />
      </section>
    </article>
  );
};