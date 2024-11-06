import React from "react";

const BinIcon = ({isActive}) => {
  return (
    <svg
      width="13"
      height="17"
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-outside-1_529_4818"
        maskUnits="userSpaceOnUse"
        x="-0.757568"
        y="-0.400024"
        width="14"
        height="18"
        fill="black"
      >
        <rect fill="white" x="-0.757568" y="-0.400024" width="14" height="18" />
        <path d="M10.9393 13.879C10.9479 13.6935 11.1051 13.5507 11.2906 13.5593C11.4761 13.5678 11.6189 13.7251 11.6103 13.9106L11.6084 13.9481C11.5998 14.1336 11.4426 14.2764 11.2571 14.2678C11.0715 14.2592 10.9288 14.102 10.9374 13.9165L10.9393 13.879ZM9.43085 9.17L9.68281 9.16935C9.74005 9.17 9.79794 9.18448 9.85122 9.2154C10.0117 9.30816 10.0663 9.51406 9.97359 9.67459L9.27429 10.8857C9.246 10.9357 9.20455 10.9785 9.15127 11.0094C8.99075 11.1022 8.78483 11.0476 8.69207 10.887L7.99211 9.6746C7.96382 9.6246 7.94738 9.56736 7.94738 9.50618C7.94738 9.32066 8.09802 9.17067 8.28289 9.17067H8.74405C8.65261 8.77332 8.46907 8.41084 8.21776 8.10756C7.8408 7.65364 7.31123 7.32996 6.70863 7.21746C6.52641 7.18326 6.40601 7.0076 6.44021 6.82538C6.47442 6.64316 6.65007 6.52276 6.83229 6.55696C7.59344 6.69906 8.26118 7.10628 8.73621 7.67863C9.08487 8.09966 9.33025 8.6095 9.43157 9.17001L9.43085 9.17ZM4.71528 11.3173L5.41524 11.316C5.47181 11.3173 5.52971 11.3317 5.58234 11.362C5.74285 11.4541 5.79811 11.6594 5.70602 11.8199L5.4751 12.2205L5.50602 12.2297C5.73299 12.2962 5.9764 12.3317 6.23099 12.3317C6.61716 12.3317 6.98161 12.2482 7.30725 12.0988C7.64671 11.9429 7.9467 11.7146 8.18748 11.4344C8.30787 11.2936 8.52037 11.2772 8.66114 11.3975C8.80193 11.5179 8.81837 11.7304 8.69798 11.8712C8.39471 12.2245 8.01578 12.5126 7.58619 12.7093C7.17174 12.8995 6.71254 13.006 6.23098 13.006C5.91718 13.006 5.61127 12.96 5.31918 12.8751C5.25602 12.8567 5.19418 12.837 5.133 12.8146L5.00734 13.033C4.97906 13.083 4.93761 13.1258 4.88432 13.1567C4.72381 13.2494 4.51789 13.1948 4.42513 13.0343L3.72517 11.8219C3.69688 11.7719 3.68044 11.7146 3.68044 11.6535C3.68044 11.4679 3.83109 11.318 4.01595 11.318H4.71591L4.71528 11.3173ZM4.99158 6.55034H5.69221C5.74944 6.55099 5.80734 6.56547 5.86062 6.59639C6.02114 6.68915 6.07574 6.89505 5.98299 7.05558L5.28235 8.26671C5.25341 8.31671 5.21196 8.36013 5.15867 8.39039C4.99816 8.48249 4.7929 8.42723 4.70079 8.26671L4.46988 7.86738C4.30805 8.01803 4.16595 8.18974 4.04753 8.37788C3.79754 8.77458 3.65281 9.24559 3.65281 9.75216C3.65281 9.90347 3.66531 10.0495 3.68833 10.1883C3.71267 10.333 3.74951 10.4738 3.79622 10.608C3.8574 10.783 3.76464 10.9745 3.58964 11.0357C3.41465 11.0968 3.22321 11.0041 3.16203 10.8291C3.10216 10.658 3.05545 10.4804 3.02453 10.2989C2.99427 10.1186 2.97782 9.93504 2.97782 9.75216C2.97782 9.11667 3.16136 8.52196 3.47847 8.02003C3.65544 7.73978 3.87451 7.48781 4.12647 7.27401L4.012 7.07599C3.97516 7.02205 3.95411 6.95692 3.95411 6.88719C3.95411 6.701 4.10476 6.55036 4.29094 6.55036L4.99158 6.55034ZM4.11266 1.82163C4.15411 1.52691 4.27384 1.25982 4.44423 1.05193C4.67318 0.773003 4.99486 0.599976 5.35208 0.599976H7.64604C8.00326 0.599976 8.32495 0.772987 8.55389 1.05193C8.72427 1.25916 8.84336 1.52625 8.88546 1.82163H11.7557C12.0314 1.82163 12.282 1.93412 12.4636 2.11569C12.6452 2.29727 12.7577 2.54791 12.7577 2.82355C12.7577 3.09919 12.6452 3.34984 12.4636 3.53141C12.3603 3.63469 12.2346 3.71562 12.0945 3.76626L11.6551 12.9968C11.6465 13.1823 11.4893 13.3251 11.3038 13.3165C11.1182 13.308 10.9755 13.1508 10.9841 12.9652L11.4189 3.82495H1.58121L2.14171 15.6119C2.14565 15.6948 2.18578 15.7724 2.24959 15.8283C2.31735 15.8882 2.41274 15.9257 2.52261 15.9257H10.4774C10.5873 15.9257 10.6827 15.8882 10.7505 15.8283C10.8136 15.7724 10.8544 15.6948 10.8583 15.6119L10.8958 14.829C10.9044 14.6435 11.0616 14.5007 11.2471 14.5093C11.4327 14.5178 11.5754 14.6751 11.5669 14.8606L11.5294 15.6434C11.5169 15.9132 11.3919 16.1572 11.1952 16.3316C11.0083 16.4973 10.757 16.6 10.4774 16.6H2.5226C2.243 16.6 1.99171 16.4967 1.80487 16.3316C1.60816 16.1572 1.48384 15.9132 1.47067 15.6434L0.906216 3.76643C0.766091 3.71578 0.639786 3.63486 0.536498 3.53092C0.354932 3.34936 0.242432 3.09871 0.242432 2.82306C0.242432 2.54742 0.354927 2.29677 0.536498 2.11521C0.718064 1.93364 0.968714 1.82114 1.24436 1.82114H4.11462L4.11266 1.82163ZM8.20056 1.82163C8.16898 1.68874 8.11175 1.57098 8.03543 1.47822C7.93149 1.35191 7.79334 1.27363 7.64598 1.27363H5.35202C5.20466 1.27363 5.06585 1.35191 4.96256 1.47822C4.88625 1.57098 4.82902 1.68873 4.79744 1.82163H8.20124H8.20056ZM11.7549 2.49528H1.24223C1.1521 2.49528 1.06987 2.53212 1.01066 2.59199C0.951451 2.6512 0.913952 2.73343 0.913952 2.82356C0.913952 2.91368 0.950793 2.99591 1.01066 3.05512C1.06987 3.11433 1.1521 3.15183 1.24223 3.15183H11.7549C11.845 3.15183 11.9273 3.11499 11.9865 3.05512C12.0457 2.99592 12.0832 2.91368 12.0832 2.82356C12.0832 2.73343 12.0464 2.65186 11.9865 2.59199C11.9273 2.53278 11.845 2.49528 11.7549 2.49528Z" />
      </mask>
      <path
        d="M10.9393 13.879C10.9479 13.6935 11.1051 13.5507 11.2906 13.5593C11.4761 13.5678 11.6189 13.7251 11.6103 13.9106L11.6084 13.9481C11.5998 14.1336 11.4426 14.2764 11.2571 14.2678C11.0715 14.2592 10.9288 14.102 10.9374 13.9165L10.9393 13.879ZM9.43085 9.17L9.68281 9.16935C9.74005 9.17 9.79794 9.18448 9.85122 9.2154C10.0117 9.30816 10.0663 9.51406 9.97359 9.67459L9.27429 10.8857C9.246 10.9357 9.20455 10.9785 9.15127 11.0094C8.99075 11.1022 8.78483 11.0476 8.69207 10.887L7.99211 9.6746C7.96382 9.6246 7.94738 9.56736 7.94738 9.50618C7.94738 9.32066 8.09802 9.17067 8.28289 9.17067H8.74405C8.65261 8.77332 8.46907 8.41084 8.21776 8.10756C7.8408 7.65364 7.31123 7.32996 6.70863 7.21746C6.52641 7.18326 6.40601 7.0076 6.44021 6.82538C6.47442 6.64316 6.65007 6.52276 6.83229 6.55696C7.59344 6.69906 8.26118 7.10628 8.73621 7.67863C9.08487 8.09966 9.33025 8.6095 9.43157 9.17001L9.43085 9.17ZM4.71528 11.3173L5.41524 11.316C5.47181 11.3173 5.52971 11.3317 5.58234 11.362C5.74285 11.4541 5.79811 11.6594 5.70602 11.8199L5.4751 12.2205L5.50602 12.2297C5.73299 12.2962 5.9764 12.3317 6.23099 12.3317C6.61716 12.3317 6.98161 12.2482 7.30725 12.0988C7.64671 11.9429 7.9467 11.7146 8.18748 11.4344C8.30787 11.2936 8.52037 11.2772 8.66114 11.3975C8.80193 11.5179 8.81837 11.7304 8.69798 11.8712C8.39471 12.2245 8.01578 12.5126 7.58619 12.7093C7.17174 12.8995 6.71254 13.006 6.23098 13.006C5.91718 13.006 5.61127 12.96 5.31918 12.8751C5.25602 12.8567 5.19418 12.837 5.133 12.8146L5.00734 13.033C4.97906 13.083 4.93761 13.1258 4.88432 13.1567C4.72381 13.2494 4.51789 13.1948 4.42513 13.0343L3.72517 11.8219C3.69688 11.7719 3.68044 11.7146 3.68044 11.6535C3.68044 11.4679 3.83109 11.318 4.01595 11.318H4.71591L4.71528 11.3173ZM4.99158 6.55034H5.69221C5.74944 6.55099 5.80734 6.56547 5.86062 6.59639C6.02114 6.68915 6.07574 6.89505 5.98299 7.05558L5.28235 8.26671C5.25341 8.31671 5.21196 8.36013 5.15867 8.39039C4.99816 8.48249 4.7929 8.42723 4.70079 8.26671L4.46988 7.86738C4.30805 8.01803 4.16595 8.18974 4.04753 8.37788C3.79754 8.77458 3.65281 9.24559 3.65281 9.75216C3.65281 9.90347 3.66531 10.0495 3.68833 10.1883C3.71267 10.333 3.74951 10.4738 3.79622 10.608C3.8574 10.783 3.76464 10.9745 3.58964 11.0357C3.41465 11.0968 3.22321 11.0041 3.16203 10.8291C3.10216 10.658 3.05545 10.4804 3.02453 10.2989C2.99427 10.1186 2.97782 9.93504 2.97782 9.75216C2.97782 9.11667 3.16136 8.52196 3.47847 8.02003C3.65544 7.73978 3.87451 7.48781 4.12647 7.27401L4.012 7.07599C3.97516 7.02205 3.95411 6.95692 3.95411 6.88719C3.95411 6.701 4.10476 6.55036 4.29094 6.55036L4.99158 6.55034ZM4.11266 1.82163C4.15411 1.52691 4.27384 1.25982 4.44423 1.05193C4.67318 0.773003 4.99486 0.599976 5.35208 0.599976H7.64604C8.00326 0.599976 8.32495 0.772987 8.55389 1.05193C8.72427 1.25916 8.84336 1.52625 8.88546 1.82163H11.7557C12.0314 1.82163 12.282 1.93412 12.4636 2.11569C12.6452 2.29727 12.7577 2.54791 12.7577 2.82355C12.7577 3.09919 12.6452 3.34984 12.4636 3.53141C12.3603 3.63469 12.2346 3.71562 12.0945 3.76626L11.6551 12.9968C11.6465 13.1823 11.4893 13.3251 11.3038 13.3165C11.1182 13.308 10.9755 13.1508 10.9841 12.9652L11.4189 3.82495H1.58121L2.14171 15.6119C2.14565 15.6948 2.18578 15.7724 2.24959 15.8283C2.31735 15.8882 2.41274 15.9257 2.52261 15.9257H10.4774C10.5873 15.9257 10.6827 15.8882 10.7505 15.8283C10.8136 15.7724 10.8544 15.6948 10.8583 15.6119L10.8958 14.829C10.9044 14.6435 11.0616 14.5007 11.2471 14.5093C11.4327 14.5178 11.5754 14.6751 11.5669 14.8606L11.5294 15.6434C11.5169 15.9132 11.3919 16.1572 11.1952 16.3316C11.0083 16.4973 10.757 16.6 10.4774 16.6H2.5226C2.243 16.6 1.99171 16.4967 1.80487 16.3316C1.60816 16.1572 1.48384 15.9132 1.47067 15.6434L0.906216 3.76643C0.766091 3.71578 0.639786 3.63486 0.536498 3.53092C0.354932 3.34936 0.242432 3.09871 0.242432 2.82306C0.242432 2.54742 0.354927 2.29677 0.536498 2.11521C0.718064 1.93364 0.968714 1.82114 1.24436 1.82114H4.11462L4.11266 1.82163ZM8.20056 1.82163C8.16898 1.68874 8.11175 1.57098 8.03543 1.47822C7.93149 1.35191 7.79334 1.27363 7.64598 1.27363H5.35202C5.20466 1.27363 5.06585 1.35191 4.96256 1.47822C4.88625 1.57098 4.82902 1.68873 4.79744 1.82163H8.20124H8.20056ZM11.7549 2.49528H1.24223C1.1521 2.49528 1.06987 2.53212 1.01066 2.59199C0.951451 2.6512 0.913952 2.73343 0.913952 2.82356C0.913952 2.91368 0.950793 2.99591 1.01066 3.05512C1.06987 3.11433 1.1521 3.15183 1.24223 3.15183H11.7549C11.845 3.15183 11.9273 3.11499 11.9865 3.05512C12.0457 2.99592 12.0832 2.91368 12.0832 2.82356C12.0832 2.73343 12.0464 2.65186 11.9865 2.59199C11.9273 2.53278 11.845 2.49528 11.7549 2.49528Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M10.9393 13.879C10.9479 13.6935 11.1051 13.5507 11.2906 13.5593C11.4761 13.5678 11.6189 13.7251 11.6103 13.9106L11.6084 13.9481C11.5998 14.1336 11.4426 14.2764 11.2571 14.2678C11.0715 14.2592 10.9288 14.102 10.9374 13.9165L10.9393 13.879ZM9.43085 9.17L9.68281 9.16935C9.74005 9.17 9.79794 9.18448 9.85122 9.2154C10.0117 9.30816 10.0663 9.51406 9.97359 9.67459L9.27429 10.8857C9.246 10.9357 9.20455 10.9785 9.15127 11.0094C8.99075 11.1022 8.78483 11.0476 8.69207 10.887L7.99211 9.6746C7.96382 9.6246 7.94738 9.56736 7.94738 9.50618C7.94738 9.32066 8.09802 9.17067 8.28289 9.17067H8.74405C8.65261 8.77332 8.46907 8.41084 8.21776 8.10756C7.8408 7.65364 7.31123 7.32996 6.70863 7.21746C6.52641 7.18326 6.40601 7.0076 6.44021 6.82538C6.47442 6.64316 6.65007 6.52276 6.83229 6.55696C7.59344 6.69906 8.26118 7.10628 8.73621 7.67863C9.08487 8.09966 9.33025 8.6095 9.43157 9.17001L9.43085 9.17ZM4.71528 11.3173L5.41524 11.316C5.47181 11.3173 5.52971 11.3317 5.58234 11.362C5.74285 11.4541 5.79811 11.6594 5.70602 11.8199L5.4751 12.2205L5.50602 12.2297C5.73299 12.2962 5.9764 12.3317 6.23099 12.3317C6.61716 12.3317 6.98161 12.2482 7.30725 12.0988C7.64671 11.9429 7.9467 11.7146 8.18748 11.4344C8.30787 11.2936 8.52037 11.2772 8.66114 11.3975C8.80193 11.5179 8.81837 11.7304 8.69798 11.8712C8.39471 12.2245 8.01578 12.5126 7.58619 12.7093C7.17174 12.8995 6.71254 13.006 6.23098 13.006C5.91718 13.006 5.61127 12.96 5.31918 12.8751C5.25602 12.8567 5.19418 12.837 5.133 12.8146L5.00734 13.033C4.97906 13.083 4.93761 13.1258 4.88432 13.1567C4.72381 13.2494 4.51789 13.1948 4.42513 13.0343L3.72517 11.8219C3.69688 11.7719 3.68044 11.7146 3.68044 11.6535C3.68044 11.4679 3.83109 11.318 4.01595 11.318H4.71591L4.71528 11.3173ZM4.99158 6.55034H5.69221C5.74944 6.55099 5.80734 6.56547 5.86062 6.59639C6.02114 6.68915 6.07574 6.89505 5.98299 7.05558L5.28235 8.26671C5.25341 8.31671 5.21196 8.36013 5.15867 8.39039C4.99816 8.48249 4.7929 8.42723 4.70079 8.26671L4.46988 7.86738C4.30805 8.01803 4.16595 8.18974 4.04753 8.37788C3.79754 8.77458 3.65281 9.24559 3.65281 9.75216C3.65281 9.90347 3.66531 10.0495 3.68833 10.1883C3.71267 10.333 3.74951 10.4738 3.79622 10.608C3.8574 10.783 3.76464 10.9745 3.58964 11.0357C3.41465 11.0968 3.22321 11.0041 3.16203 10.8291C3.10216 10.658 3.05545 10.4804 3.02453 10.2989C2.99427 10.1186 2.97782 9.93504 2.97782 9.75216C2.97782 9.11667 3.16136 8.52196 3.47847 8.02003C3.65544 7.73978 3.87451 7.48781 4.12647 7.27401L4.012 7.07599C3.97516 7.02205 3.95411 6.95692 3.95411 6.88719C3.95411 6.701 4.10476 6.55036 4.29094 6.55036L4.99158 6.55034ZM4.11266 1.82163C4.15411 1.52691 4.27384 1.25982 4.44423 1.05193C4.67318 0.773003 4.99486 0.599976 5.35208 0.599976H7.64604C8.00326 0.599976 8.32495 0.772987 8.55389 1.05193C8.72427 1.25916 8.84336 1.52625 8.88546 1.82163H11.7557C12.0314 1.82163 12.282 1.93412 12.4636 2.11569C12.6452 2.29727 12.7577 2.54791 12.7577 2.82355C12.7577 3.09919 12.6452 3.34984 12.4636 3.53141C12.3603 3.63469 12.2346 3.71562 12.0945 3.76626L11.6551 12.9968C11.6465 13.1823 11.4893 13.3251 11.3038 13.3165C11.1182 13.308 10.9755 13.1508 10.9841 12.9652L11.4189 3.82495H1.58121L2.14171 15.6119C2.14565 15.6948 2.18578 15.7724 2.24959 15.8283C2.31735 15.8882 2.41274 15.9257 2.52261 15.9257H10.4774C10.5873 15.9257 10.6827 15.8882 10.7505 15.8283C10.8136 15.7724 10.8544 15.6948 10.8583 15.6119L10.8958 14.829C10.9044 14.6435 11.0616 14.5007 11.2471 14.5093C11.4327 14.5178 11.5754 14.6751 11.5669 14.8606L11.5294 15.6434C11.5169 15.9132 11.3919 16.1572 11.1952 16.3316C11.0083 16.4973 10.757 16.6 10.4774 16.6H2.5226C2.243 16.6 1.99171 16.4967 1.80487 16.3316C1.60816 16.1572 1.48384 15.9132 1.47067 15.6434L0.906216 3.76643C0.766091 3.71578 0.639786 3.63486 0.536498 3.53092C0.354932 3.34936 0.242432 3.09871 0.242432 2.82306C0.242432 2.54742 0.354927 2.29677 0.536498 2.11521C0.718064 1.93364 0.968714 1.82114 1.24436 1.82114H4.11462L4.11266 1.82163ZM8.20056 1.82163C8.16898 1.68874 8.11175 1.57098 8.03543 1.47822C7.93149 1.35191 7.79334 1.27363 7.64598 1.27363H5.35202C5.20466 1.27363 5.06585 1.35191 4.96256 1.47822C4.88625 1.57098 4.82902 1.68873 4.79744 1.82163H8.20124H8.20056ZM11.7549 2.49528H1.24223C1.1521 2.49528 1.06987 2.53212 1.01066 2.59199C0.951451 2.6512 0.913952 2.73343 0.913952 2.82356C0.913952 2.91368 0.950793 2.99591 1.01066 3.05512C1.06987 3.11433 1.1521 3.15183 1.24223 3.15183H11.7549C11.845 3.15183 11.9273 3.11499 11.9865 3.05512C12.0457 2.99592 12.0832 2.91368 12.0832 2.82356C12.0832 2.73343 12.0464 2.65186 11.9865 2.59199C11.9273 2.53278 11.845 2.49528 11.7549 2.49528Z"
        stroke={isActive ? "#fff" : "#69776D"}
        strokeWidth="0.2"
        mask="url(#path-1-outside-1_529_4818)"
      />
    </svg>
  );
};

export default BinIcon;
