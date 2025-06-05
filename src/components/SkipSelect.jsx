import SkipHeader from "./SkipHeader";
import SkipFooter from "./SkipFooter";
import SkipImage from "../assets/skip.jpg"; // Backup image for the skips
import warningIco from "../assets/warning.png"; // Credit: flaticon.com
import checkIco from "../assets/check.png"; // Credit: flaticon.com
import { useEffect, useState } from "react";

// Component for the "Skip Select" Web Page
const SkipSelect = () => {
  const [skipData, setSkipData] = useState([]); // State for storing skip data
  const [selectedSkip, SetSelectedSkip] = useState(null);
  const [footerSticky, setFooterSticky] = useState(false);

  const SKIP_IMAGE_URL =
    "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/"; // The API provided didn't have any Image URL, so an alternative URL used on the "wewantwaste" app was implemented instead. This URL serves as the base for all the skip images

  useEffect(() => {
    // Function to Fetch the Skip Data from the API - 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!response.ok) console.log(`HTTP Error: ${response.status}`);
        const data = await response.json();
        setSkipData(data);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    };
    fetchSkips();
  }, []);

  // Function handles the skip button click
  const handleClick = (skip) => {
    // If the clicked skip is already selected, unselect it
    if (selectedSkip && selectedSkip.id === skip.id) {
      SetSelectedSkip(null);
      setFooterSticky(false);
    } else {
      SetSelectedSkip(skip);
      setFooterSticky(true);
    }
  };

  return (
    // Container for the skip selector area
    <main className="skip-select-area pb-40">
      <SkipHeader />
      <section className="skip-select m-5 lg:mx-50">
        {/* Heading Area */}
        <div className="skip-select-heading text-center lg:text-left mb-8">
          <h2 className="font-montserrat font-bold text-2xl lg:text-4xl lg:mb-3">
            Select Skip Size
          </h2>
          <h3 className="font-open-sans font-semibold text-[var(--rem-orange)] text-xl lg:text-2xl">
            Various skip sizes to suit your needs
          </h3>
        </div>

        {/* Skip Container */}
        <article className="skip-container grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 lg:w-full lg:max-w-none lg:mx-0">
          {skipData.map((skip) => (
            <div
              key={skip.id}
              className={`skip bg-[var(--rem-dark-blue)] rounded-xl flex flex-col h-full overflow-hidden transition-all duration-200 ${
                selectedSkip && selectedSkip.id === skip.id
                  ? "border-[var(--rem-orange)] border-5"
                  : "ring-transparent ring-2 hover:ring-[var(--rem-orange)] hover:ring-4"
              }`}
            >
              {/* Skip Image */}
              <img
                src={`${SKIP_IMAGE_URL}${skip.size}-yarder-skip.jpg`}
                alt={`${skip.size} Yard Skip`}
                className="skip-img object-cover w-[480px] h-[331px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = SkipImage; //Backup Skip image
                }}
              />

              {/* Skip Info box */}
              <div className="info-box p-4 flex flex-col flex-grow">
                <div className="box-line flex justify-between mb-2">
                  <h3 className="skip-size font-montserrat font-bold text-xl text-[var(--rem-orange)]">
                    {skip.size} Yard Skip
                  </h3>
                  <h3 className="skip-price font-montserrat font-bold text-xl text-[var(--rem-light-gray)]">
                    £{skip.price_before_vat + skip.vat}
                  </h3>
                </div>

                <div className="skip-details font-open-sans text-[var(--rem-light-gray)] text-md flex-grow overflow-hidden text-ellipsis">
                  <p className="skip-hire mb-3">
                    {skip.hire_period_days} day hire period
                  </p>

                  {skip.allowed_on_road ? (
                    <p className="skip-road flex items-center">
                      {" "}
                      <img
                        src={checkIco}
                        alt="Check icon"
                        className="w-4 h-4 mr-2"
                      />{" "}
                      Allowed on Road
                    </p>
                  ) : (
                    <p className="skip-road text-[#FFA3A3] flex items-center">
                      {" "}
                      <img
                        src={warningIco}
                        alt="Warning icon"
                        className="w-4 h-4 mr-2"
                      />{" "}
                      Not allowed on Road
                    </p>
                  )}

                  {skip.allows_heavy_waste ? (
                    <p className="skip-waste flex items-center">
                      {" "}
                      <img
                        src={checkIco}
                        alt="Check icon"
                        className="w-4 h-4 mr-2"
                      />{" "}
                      Can be used for Heavy Waste
                    </p>
                  ) : (
                    <p className="skip-waste text-[#FFA3A3] flex items-center">
                      {" "}
                      <img
                        src={warningIco}
                        alt="Warning icon"
                        className="w-4 h-4 mr-2"
                      />{" "}
                      Can't be used for Heavy Waste
                    </p>
                  )}
                </div>
                <button
                  className={`skip-button block w-fit mt-4 mx-auto font-open-sans p-3 rounded-md font-bold  ${
                    footerSticky && selectedSkip.id === skip.id
                      ? "bg-[var(--rem-orange)] text-white hover:cursor-pointer"
                      : "bg-[var(--rem-light-gray)] text-[var(--rem-dark-blue)] hover:cursor-pointer hover:bg-[var(--rem-orange)]"
                  }`}
                  onClick={() => handleClick(skip)}
                >
                  {footerSticky && selectedSkip.id === skip.id
                    ? "Selected Skip"
                    : "Select Skip"}
                </button>
              </div>
            </div>
          ))}
        </article>
      </section>

      {footerSticky ? <SkipFooter selectedSkip={selectedSkip} /> : null}
    </main>
  );
};

export default SkipSelect;
