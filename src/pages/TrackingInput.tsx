import { useState } from "react";
import EastCoastLogo from "../assets/EastCoastLogo.png";
import LegitFishLogoWhite from "../assets/LegitFishLogoWhite.svg";
import "./TrackingInput.css";
import { useNavigate } from "react-router-dom";

const TrackingInput = () => {
  const [lotNumber, setLotNumber] = useState<string>("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleTraceClick = () => {
    if (lotNumber) {
      navigate(`/trace/${lotNumber}`);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="container">
      <img src={EastCoastLogo} alt="Legit Fish Logo" className="logo" />

      <p className="description">
        Please enter the lot number you would like to trace
      </p>

      <div className="input-field">
        <input
          type="text"
          placeholder="Lot Number"
          value={lotNumber}
          onChange={(e) => setLotNumber(e.target.value)}
          onInput={() => setShowError(false)}
        />
      </div>
      {showError && <p className="error-text">Please enter a lot ID</p>}
      <p className="help-text">Help me find my lot number</p>

      <button className="trace-button" onClick={handleTraceClick}>
        Trace
      </button>

      <p className="trace-poweredby">Trace data powered by</p>
      <img
        src={LegitFishLogoWhite}
        alt="Legit Fish Logo"
        className="legit-logo"
      />
    </div>
  );
};

export default TrackingInput;
