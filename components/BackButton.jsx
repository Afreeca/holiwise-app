import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const BackButton = ({ title }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      onClick={goBack}
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>{title}</span>
    </button>
  );
};

export default BackButton;
