import { useState } from "react";
import { Modal } from "react-bootstrap";


/* <Modal show={ showModal } onHide={ ()=>{ setShowModal( false ) } }>

  <Modal.Body>
    <h3>{ movieToModal.title }</h3>
    <img className="w-100 rounded my-shadow" src={ `https://image.tmdb.org/t/p/w500${ movieToModal.poster_path }` } alt={ movieToModal.title} />
  </Modal.Body>
  <Modal.Footer>
    <button onClick={ ()=>{ setShowModal( false ) } }>
      Close
    </button>
    <button onClick={ ()=>{ setShowModal( false ) } }>
      Save Changes
    </button>
  </Modal.Footer>

</Modal> */


function BootstrapModal({ setMovieToModal, movie }) {
    
  const [movieToModal, setMovieToModal] = useState( null );
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
  
        <Modal show={true} onHide={setMovieToModal(null)}>
          
          <Modal.Body>
              <h3>{ movie.title }</h3>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={setMovieToModal(null)}>
              Close
            </button>
            <button onClick={setMovieToModal(null)}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default BootstrapModal;