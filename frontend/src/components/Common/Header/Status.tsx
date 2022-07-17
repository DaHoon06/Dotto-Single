import { UserModal } from "../Modal/UserModal";
import {useState} from "react";

export const Status = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <article>
      {props.isLogin ?
        <section>
          <button>Logout</button>
        </section>
        :
        <section>
          <button onClick={openModal}>Login</button>
        </section>
      }
      <UserModal open={showModal} close={closeModal}/>
    </article>
  );
}