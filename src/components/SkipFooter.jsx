// Footer for the Skip Selector Page
const SkipFooter = () => {
  return (
    <footer className="skip-footer bg-[var(--rem-orange)] text-white p-3">
      <p className="font-montserrat font-semibold text-sm">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </p>
      <hr className="my-3" />

      <div className="skip-addition font-open-sans text-lg flex justify-between">
        <div className="addition-info">
          <h3 className="font-bold text-[var(--rem-dark-blue)]">
            Size Selected: <span className="text-white">6 Yard Skip</span>
          </h3>
          <h3 className="font-bold text-[var(--rem-dark-blue)]">
            Total: <span className="text-white">£300</span>
          </h3>
        </div>
        <div className="skip-buttons">
          <button className="skip-button bg-[var(--rem-light-gray)] text-[var(--rem-dark-blue)] p-3 rounded-md font-bold">
            Back
          </button>
          <button className="skip-button ml-5 bg-[var(--rem-dark-blue)] text-white p-3 rounded-md font-bold">
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
};

export default SkipFooter;
