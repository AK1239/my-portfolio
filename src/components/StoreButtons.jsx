import { FaGooglePlay, FaApple } from "react-icons/fa";

const StoreButtons = ({ playStore, appStore, size = "default" }) => {
  const isLarge = size === "large";

  return (
    <div className={`flex flex-wrap gap-3 ${isLarge ? "gap-4" : ""}`}>
      <a
        href={playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 bg-black text-white rounded-xl font-medium transition-all duration-300 hover:bg-gray-900 hover:scale-[1.02] active:scale-[0.98] ${
          isLarge ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm"
        }`}
      >
        <FaGooglePlay className={isLarge ? "text-xl" : "text-lg"} />
        <span>
          <span className="block text-[10px] uppercase tracking-wide opacity-70 leading-none">
            Get it on
          </span>
          <span className="block font-semibold leading-tight">Google Play</span>
        </span>
      </a>
      <a
        href={appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] ${
          isLarge ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm"
        }`}
      >
        <FaApple className={isLarge ? "text-xl" : "text-lg"} />
        <span>
          <span className="block text-[10px] uppercase tracking-wide opacity-70 leading-none">
            Download on the
          </span>
          <span className="block font-semibold leading-tight">App Store</span>
        </span>
      </a>
    </div>
  );
};

export default StoreButtons;
