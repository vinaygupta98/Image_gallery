import {
  Button,
  Modal,
} from "react-bootstrap";

const PhotoModal = ({
  show,
  setShow,
  data,
}) => {
  const handleClose = () =>
    setShow(false);
  const handleShow = () =>
    setShow(true);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size='lg'
    >
      <Modal.Header
        closeButton
      >
        <Modal.Title>
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={
            data?.urls.regular
          }
          style={{
            width: "100%",
            height: "500px",
          }}
          alt={
            data?.alt_description
          }
        />
        <h5>
          Likes{" "}
          <span
            style={{
              color: "red",
            }}
          >
            {" "}
            {data?.likes}
          </span>
        </h5>
        <h5>
          user:
          {data?.user.name}
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onClick={
            handleClose
          }
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PhotoModal;
