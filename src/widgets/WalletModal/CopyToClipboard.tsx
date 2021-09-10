import React, { useState } from "react";
import { CopyIcon } from "../../components/Svg";

interface Props {
  toCopy: string;
}

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <button
      type="button"
      className="text-uppercase"
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(toCopy);
          setIsTooltipDisplayed(true);
          setTimeout(() => {
            setIsTooltipDisplayed(false);
          }, 1000);
        }
      }}
      {...props}
    >
      {children}
      <CopyIcon width="20px" color="primary" ml="4px" />
      {isTooltipDisplayed && <span className="btn-tooltip">Copied</span>}
      
    </button>
  );
};

export default CopyToClipboard;
