import { AiOutlineClose } from "react-icons/ai";
import { GoCheck } from "react-icons/go";
import { PiSmileySadLight } from "react-icons/pi";
interface MessageModalProps {
  text: string;
  desc: string;
  status: string;
  setOpenModal: (open: boolean) => void;
}

const MessageModal = ({
  setOpenModal,
  text,
  desc,
  status,
}: MessageModalProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-centerwa">
      <div className="relative bg-white  rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0">
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="absolute top-2 right-2 p-2 rounded-full text-gray-500 hover:text-gray-700  -300"
        >
          <AiOutlineClose size={22} />
        </button>

        <div className="p-6 text-center">
          <div
            className={`mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full border-4  text-4xl ${
              status === "success"
                ? "border-green-200 bg-green-100"
                : "border-red-200 bg-red-100"
            }`}
          >
            {status === "success" ? (
              <GoCheck className="text-green-600" />
            ) : (
              <PiSmileySadLight className="text-red-600" />
            )}
          </div>

          <h3 className="text-xl font-bold text-gray-800  mb-2">{text}</h3>
          <p className="text-gray-500 text-sm">{desc}</p>

          <div className="mt-6 flex justify-center gap-x-4">
            <button
              onClick={() => setOpenModal(false)}
              type="button"
              className="py-2 px-4 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
