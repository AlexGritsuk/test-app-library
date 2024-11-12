import BtnCreate from "../../components/btnCreate/btnCreate";
import Cards from "../../components/cards/cards";
import { Link } from "react-router-dom";



const BookList = (): JSX.Element => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <Link to="/Create">
            <div className="mb-3 mt-3 d-flex justify-content-end">
              <BtnCreate />
            </div>
          </Link>
        </div>
        <div className="col-4">GroupList</div>
        <div className="col-6">          
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;



