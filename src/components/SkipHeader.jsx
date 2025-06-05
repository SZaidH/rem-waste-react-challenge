import REMLogo from "../assets/REMLogo.png"; //Importing the REM Logo

// Component which houses the logo and the multiple step progress bar
const SkipHeader = () => {
  // Steps for the progress bar
  const steps = [
    { number: 1, label: "Postcode" },
    { number: 2, label: "Waste Type" },
    { number: 3, label: "Select Skip" },
    { number: 4, label: "Permit Check" },
    { number: 5, label: "Choose Date" },
    { number: 6, label: "Payment" },
  ];

  // The step at which the web page is at
  const currentStep = 3;

  return (
    <header className="skip-header m-3 lg:my-5 lg:mx-30 lg:flex lg:justify-center lg:items-center">
      <img
        src={REMLogo}
        alt="REM Logo"
        className="w-[111px] h-[63px] object-contain lg:mr-15"
      />

      {/* Progress Bar Section */}
      <section className="stepper-wrapper my-5 bg-[var(--rem-dark-blue)] rounded-xl p-3 font-montserrat flex justify-between lg:flex-grow">
        {steps.map((step) => {
          // Determining the state classes for each stepper item
          const isCompleted = step.number < currentStep;
          const isActive = step.number === currentStep;

          // Building the class string for the stepper item
          let itemClasses = "stepper-item";
          if (isCompleted) itemClasses += " completed";
          if (isActive) itemClasses += " active";

          return (
            <div key={step.number} className={itemClasses}>
              <div className="step-counter">{step.number}</div>
              <div className="step-name">{step.label}</div>
            </div>
          );
        })}
      </section>
    </header>
  );
};

export default SkipHeader;
