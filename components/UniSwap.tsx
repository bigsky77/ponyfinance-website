import React, { useEffect, useState } from "react";

interface UniSwapProps {
  inputCurrency?: string;
  outputCurrency?: string;
  exactAmount?: number;
  exactField?: "input" | "output";
  theme?: "light" | "dark";
  hide?: () => void;
}

const UniSwap: React.FC<UniSwapProps> = ({
  inputCurrency,
  outputCurrency,
  exactAmount,
  exactField,
  theme = "light",
  hide,
}) => {
  const [screenWidth, setScreenWidth] = useState(screen.width);

  useEffect(() => {
    const listener = () => {
      setScreenWidth(screen.width);
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  const UNISWAP_URL = "https://app.uniswap.org/#/swap";
  const params = new URLSearchParams();

  if (inputCurrency) params.append("inputCurrency", inputCurrency);
  if (outputCurrency) params.append("outputCurrency", outputCurrency);
  if (exactAmount) params.append("exactAmount", exactAmount.toString());
  if (exactField) params.append("exactField", exactField);
  if (theme) params.append("theme", theme);

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 animate-fade-in z-20">
      <div className="w-[348px] md:w-[548px]">
        <div className="flex flex-row justify-start items-center w-full h-8 px-4 rounded-t-xl bg-white text-2xl font-black float-right border-b-[1px]">
          <div
            onClick={() => (hide ? hide() : null)}
            className="w-4 h-4 rounded-full bg-red-400 cursor-pointer hover:bg-red-600 transition-colors"
          ></div>
        </div>

        {screenWidth < 768 ? (
          <iframe
            src={`${UNISWAP_URL}?${params.toString()}`}
            height="520px"
            width="100%"
            style={{
              border: "0",
              margin: "0 auto",
              marginBottom: ".5rem",
              display: "block",
              borderRadius: "0px 0px 12px 12px",
              maxWidth: "960px",
              minWidth: "300px",
            }}
          />
        ) : (
          <iframe
            src={`${UNISWAP_URL}?${params.toString()}`}
            height="660px"
            width="100%"
            style={{
              border: "0",
              margin: "0 auto",
              marginBottom: ".5rem",
              display: "block",
              borderRadius: "0px 0px 12px 12px",
              maxWidth: "960px",
              minWidth: "300px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default UniSwap;
