import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { removeBook } from "../../store/bookReducer";
import ModalWindow from "../modalWindow/modalWindow";
import ModalFormEdit from "../../pages/modalFormEdit/modalFormEdit";

interface CardProps {
  title: string;
  authorName: string;
  genres: [];
  id: number;
}

const Card = ({ title, authorName, genres, id }: CardProps): JSX.Element => {
  const [isModalActive, setModalActive] = useState(false);
  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };  

  const dispatch = useAppDispatch();
  return (
    <div className="card text-center position-relative">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h5 className="card-title">{authorName}</h5>
        <p className="card-text">{genres.map((el: any) => el.name)}</p>
        <button
          type="button"
          className="btn position-absolute top-0 start-0"
          onClick={handleModalOpen}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          type="button"
          className="btn position-absolute top-0 end-0"
          onClick={() => dispatch(removeBook(id))}
        >
          <i className="bi bi-x-circle-fill"></i>
        </button>
      </div>
      <div className="card-footer text-body-secondary">2 days ago</div>
      <div>
        {isModalActive && (
          <ModalWindow title="Отредактируйте книгу" onClose={handleModalClose}>
            <ModalFormEdit
              bookId={id}
              title={title}
              authorName={authorName}
              genresArr={genres}
            />
          </ModalWindow>
        )}
      </div>
    </div>
  );
};

export default Card;
