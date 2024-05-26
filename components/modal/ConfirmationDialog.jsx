import { Dialog } from "@headlessui/react";

const ConfirmationDialog = ({
  isOpen,
  onClose,
  title,
  description,
  onCancel,
  onConfirm,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white rounded-lg p-6 space-y-4 shadow-xl">
          <Dialog.Title className="text-lg font-medium">{title}</Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500">
            {description}
          </Dialog.Description>
          <div className="flex space-x-4">
            {onCancel && (
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
            )}
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;
