import SkipHeader from "./SkipHeader";
import SkipFooter from "./SkipFooter";
import SkipImage from "../assets/skip.jpg";
import { useEffect, useState } from "react";

// Component for the "Skip Select" Web Page
const SkipSelect = () => {
  const [skipData, setSkipData] = useState([]); // State for storing skip data

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

  return (
    // Container for the skip selector area
    <main className="skip-select-area">
      <SkipHeader />
      <section className="skip-select m-5">
        {/* Heading Area */}
        <div className="skip-select-heading text-center mb-8">
          <h2 className="font-montserrat font-bold text-2xl">
            Select Skip Size
          </h2>
          <h3 className="font-open-sans font-semibold text-[var(--rem-orange)] text-xl">
            Various skip sizes to suit your needs
          </h3>
        </div>

        {/* Skip Container */}
        <article className="skip-container grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skipData.map((skip) => (
            <div
              key={skip.id}
              className="skip bg-[var(--rem-dark-blue)] rounded-xl flex flex-col h-full overflow-hidden"
            >
              {/* Skip Image */}
              <img
                src={SkipImage}
                alt={`${skip.size} Yard Skip`}
                className="skip-img object-cover rounded-t-xl"
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

                <p className="skip-details font-open-sans text-[var(--rem-light-gray)] text-md mb-4 flex-grow overflow-hidden text-ellipsis">
                  {skip.hire_period_days} day hire period
                </p>

                <button className="skip-button block w-fit mx-auto bg-[var(--rem-light-gray)] font-open-sans text-[var(--rem-dark-blue)] p-3 rounded-md font-bold">
                  Select Skip
                </button>
              </div>
            </div>
          ))}
        </article>
      </section>
      <SkipFooter />
    </main>
  );
};

export default SkipSelect;
