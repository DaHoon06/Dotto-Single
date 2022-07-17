import './UserModal.style.scss';

export const UserModal = (props: any) => {
  const { open, close } = props;
  return(
    <article className={open ? 'openModal modal' : 'modal'}>
      <section className="modal-body">
        TEST
      </section>
    </article>
  );
};