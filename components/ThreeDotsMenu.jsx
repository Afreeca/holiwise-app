import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

const ThreeDotsMenu = ({ options }) => {
  return (
    <Popover className="relative">
      <PopoverButton>
        <span className="cursor-pointer text-gray-600 text-xl inline-block transform rotate-90">
          &#8943;
        </span>
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute right-0 top-0 -mt-10  bg-white rounded-md shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => option.action()}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              {option.icon && (
                <FontAwesomeIcon icon={option.icon} className="mr-2" />
              )}
              {option.label}
            </button>
          ))}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default ThreeDotsMenu;
