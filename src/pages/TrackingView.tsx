import lot_icon from "../assets/lot_icon.svg";
import calender_logo from "../assets/calender_logo.svg";
import fishing_area_logo from "../assets/fishing_area_logo.svg";
import location_logo from "../assets/location_logo.svg";
import market_logo from "../assets/market_logo.svg";
import species_logo from "../assets/species_logo.svg";

import mapPlaceholder from "../assets/mapPlaceholder.jpg";
import { DetailItem } from "../components/DetailItems";
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa";

import "./TrackingView.css";

const TrackingView = () => {
  return (
    <section style={{ width: "100%" }}>
      <div className="verification-container">
        <div className="map-section">
          <div className="map-top-border">
            <FaArrowLeft />
          </div>
          <img
            src={mapPlaceholder}
            alt="Map Placeholder"
            className="map-image"
          />
          <div className="map-bottom-border">
            <span className="verification-text">Verification Result</span>
            <FaInfoCircle className="info-icon" />
          </div>
        </div>

        {/* Details Section */}
        <div className="details-section">
          <DetailItem icon={lot_icon} label="Lot Number" value="Ecdemo" />
          <DetailItem
            icon={market_logo}
            label="Market Name"
            value="North American Lobster"
          />
          <DetailItem
            icon={species_logo}
            label="Species"
            value="Homarus Americanus"
          />
          <DetailItem
            icon={calender_logo}
            label="Landed Date"
            value="2023-03-08"
          />
          <DetailItem
            icon={location_logo}
            label="Landing Port"
            value="Stonington, ME"
          />
          <DetailItem
            icon={fishing_area_logo}
            label="FISHING AREA"
            value="Maine State Area B"
          />
        </div>
      </div>
    </section>
  );
};

export default TrackingView;
