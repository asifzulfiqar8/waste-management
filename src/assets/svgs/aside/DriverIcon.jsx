import React from "react";

const DriverIcon = ({isActive}) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1535 4.66294L16.6316 4.41651C16.5399 4.23872 16.4411 4.06151 16.3377 3.88983L15.877 4.16722C15.9743 4.32883 16.0673 4.49562 16.1535 4.66294Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M15.541 3.65139L15.9808 3.34174C15.1831 2.21173 14.1417 1.27539 12.9335 0.601929L12.6724 1.07207C13.8097 1.7061 14.7901 2.58758 15.541 3.65139Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M0.846479 12.5371L0.368408 12.7835C0.460087 12.9613 0.558943 13.1385 0.662336 13.3102L1.12305 13.0328C1.02573 12.8712 0.932657 12.7044 0.846479 12.5371Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M1.45977 13.5486L1.02002 13.8583C1.81773 14.9883 2.85915 15.9246 4.06733 16.5981L4.32844 16.1279C3.19108 15.4939 2.21071 14.6124 1.45977 13.5486Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M8.49975 0.600005C6.9175 0.600004 5.37078 1.06919 4.05519 1.94824C2.7396 2.82729 1.71422 4.07672 1.10872 5.53853C0.503222 7.00033 0.344796 8.60886 0.653477 10.1607C0.962159 11.7126 1.72408 13.138 2.8429 14.2568C4.34319 15.7571 6.37802 16.6 8.49975 16.6C10.6215 16.6 12.6563 15.7571 14.1566 14.2568C15.6569 12.7565 16.4997 10.7217 16.4997 8.59999C16.4997 6.47826 15.6569 4.44343 14.1566 2.94314C13.4155 2.19795 12.5339 1.60715 11.5629 1.20495C10.5919 0.802748 9.55075 0.597133 8.49975 0.600005ZM8.49975 15.7428C4.56118 15.7428 1.35691 12.5386 1.35691 8.59999C1.35691 4.66143 4.56118 1.45715 8.49975 1.45715C12.4383 1.45715 15.6426 4.66143 15.6426 8.59999C15.6426 12.5386 12.4383 15.7428 8.49975 15.7428Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M7.64258 8.59988C7.64258 8.7694 7.69285 8.93512 7.78703 9.07608C7.88122 9.21704 8.01508 9.3269 8.17171 9.39177C8.32833 9.45665 8.50067 9.47362 8.66694 9.44055C8.83321 9.40748 8.98594 9.32584 9.10581 9.20597C9.22568 9.08609 9.30732 8.93337 9.34039 8.7671C9.37346 8.60083 9.35649 8.42849 9.29161 8.27186C9.22674 8.11524 9.11688 7.98137 8.97592 7.88719C8.83496 7.79301 8.66925 7.74274 8.49972 7.74274C8.27247 7.743 8.05461 7.83339 7.89392 7.99408C7.73323 8.15477 7.64284 8.37263 7.64258 8.59988ZM8.78543 8.88559H8.21401V8.31416H8.78543V8.88559Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M1.94632 8.11497C1.93459 8.27516 1.92863 8.43683 1.92847 8.59997C1.9283 9.04945 1.97423 9.49776 2.06554 9.93786L4.50768 9.63254C4.89239 9.58452 5.28286 9.61577 5.65504 9.72436C6.02722 9.83295 6.37323 10.0166 6.67176 10.2639C6.97029 10.5113 7.21502 10.8172 7.39088 11.1627C7.56674 11.5082 7.67 11.8861 7.69431 12.273L7.87363 15.1414C8.07981 15.161 8.28863 15.1714 8.49988 15.1714C8.71113 15.1714 8.91995 15.161 9.12613 15.1414L9.30545 12.2732C9.32967 11.8862 9.43287 11.5083 9.6087 11.1627C9.78453 10.8172 10.0293 10.5113 10.3278 10.2639C10.6264 10.0165 10.9724 9.83282 11.3446 9.72424C11.7168 9.61567 12.1073 9.58446 12.4921 9.63254L14.9342 9.93783C15.0255 9.49773 15.0715 9.04944 15.0713 8.59997C15.0713 8.43683 15.0653 8.27516 15.0534 8.11497C13.6322 7.17855 11.1407 6.59998 8.49988 6.59998C5.8591 6.59998 3.36754 7.17855 1.94632 8.11497ZM6.49989 8.88568H5.64275V8.31426H6.49989V8.88568ZM10.4999 8.31426H11.357V8.88568H10.4999V8.31426ZM9.92845 8.59997C9.92845 8.88252 9.84467 9.15871 9.68769 9.39364C9.53072 9.62857 9.30761 9.81167 9.04657 9.9198C8.78553 10.0279 8.4983 10.0562 8.22118 10.0011C7.94407 9.94597 7.68952 9.80991 7.48973 9.61012C7.28994 9.41033 7.15388 9.15579 7.09876 8.87867C7.04364 8.60156 7.07193 8.31432 7.18006 8.05328C7.28818 7.79224 7.47128 7.56913 7.70621 7.41216C7.94114 7.25519 8.21734 7.1714 8.49988 7.1714C8.87863 7.17183 9.24175 7.32247 9.50956 7.59029C9.77738 7.85811 9.92802 8.22122 9.92845 8.59997Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
    </svg>
  );
};

export default DriverIcon;
