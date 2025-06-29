import { useNavigate } from "react-router-dom";

// Footer for the Skip Selector Page
const SkipFooter = ({ selectedSkip }) => {
  const navigate = useNavigate();

  const handleNavigationClick = () => {
    navigate("/under-development");
  };

  return (
    <footer className="skip-footer bg-[var(--rem-orange)] text-white p-3 fixed bottom-0 left-0 right-0 w-full z-50 lg:py-5 lg:px-10 lg:flex lg:justify-between">
      <div className="info-text lg:flex lg:justify-center lg:items-center lg:w-4/6">
        <p className="font-montserrat font-semibold text-xs lg:text-lg">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
      </div>

      <hr className="my-3" />

      <div className="skip-addition font-open-sans text-sm flex justify-between lg:flex lg:flex-col lg:w-1/5 lg:text-xl lg:border-l-2 lg:pl-4">
        <div className="addition-info lg:mb-3">
          <h3 className="font-bold text-[var(--rem-dark-blue)]">
            Size Selected:{" "}
            <span className="text-white">{selectedSkip.size} Yard Skip</span>
          </h3>
          <h3 className="font-bold text-[var(--rem-dark-blue)]">
            Total:{" "}
            <span className="text-white">
              £{selectedSkip.price_before_vat + selectedSkip.vat}
            </span>
          </h3>
        </div>
        <div className="skip-buttons">
          <button
            className="skip-button bg-[var(--rem-light-gray)] text-[var(--rem-dark-blue)] p-2 rounded-md font-bold hover:cursor-pointer"
            onClick={handleNavigationClick}
          >
            Back
          </button>
          <button
            className="skip-button ml-3 bg-[var(--rem-dark-blue)] text-white p-2 rounded-md font-bold hover:cursor-pointer hover:bg-[#016098]"
            onClick={handleNavigationClick}
          >
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
};

export default SkipFooter;
