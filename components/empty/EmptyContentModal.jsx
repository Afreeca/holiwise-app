import Modal from "../modal/Modal";

const EmptyContentModal = ({
  title,
  onClose,
  message,
  buttonText,
  onRedirect,
}) => {
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      primaryButtonText={buttonText}
      secondaryButtonText="Cancel"
    >
      <div className="flex items-center justify-center"></div>
      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3
          className="text-base font-semibold leading-6 text-gray-900"
          id="modal-title"
        >
          {title}
        </h3>
        <div className="mt-2">
          <p className="text-gray-500">{message}</p>
        </div>
      </div>
      <div className="bg-gray-50 px-4 justify-center py-3 sm:flex sm:px-6">
        <button
          onClick={onRedirect}
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          {buttonText}
        </button>
      </div>
    </Modal>
  );
};

export default EmptyContentModal;
