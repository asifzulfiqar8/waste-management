import React from "react";

const TruckIcon = ({isActive}) => {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.40532 9.99683H2.70639C2.47896 9.99683 2.29395 10.1818 2.29395 10.4093V10.4733C2.29395 10.7007 2.47896 10.8857 2.70639 10.8857H3.40532C3.63275 10.8857 3.81777 10.7007 3.81777 10.4733V10.4093C3.81777 10.1818 3.63275 9.99683 3.40532 9.99683ZM3.5638 10.4733C3.5638 10.5606 3.49269 10.6318 3.40532 10.6318H2.70639C2.61903 10.6318 2.54792 10.5606 2.54792 10.4733V10.4093C2.54792 10.3219 2.61903 10.2508 2.70639 10.2508H3.40532C3.49269 10.2508 3.5638 10.3219 3.5638 10.4093V10.4733Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <mask
        id="path-2-outside-1_529_6181"
        maskUnits="userSpaceOnUse"
        x="-0.484131"
        y="-0.400024"
        width="16"
        height="18"
        fill="black"
      >
        <rect fill="white" x="-0.484131" y="-0.400024" width="16" height="18" />
        <path d="M14.03 5.67938H13.6728L12.6614 5.07252C12.5628 4.81182 12.3042 4.60369 11.9629 4.53448C11.9135 4.52445 11.8653 4.51493 11.8174 4.50566V3.19568C11.8174 2.5205 11.2499 1.94246 10.4973 1.85116L9.44864 1.72405L9.44077 1.68697C9.30807 1.05725 8.63543 0.599976 7.84177 0.599976H7.15821C6.36455 0.599976 5.69191 1.05725 5.55896 1.6871L5.55108 1.72417L4.50244 1.85129C3.75005 1.94246 3.18256 2.5205 3.18256 3.19568V4.50553C3.13468 4.5148 3.08643 4.52445 3.03703 4.53436C2.69582 4.60331 2.43715 4.81156 2.33861 5.07239L1.3273 5.67938H0.970095C0.719553 5.67938 0.515869 5.88307 0.515869 6.13361V7.76486C0.515869 8.0154 0.719553 8.21908 0.970095 8.21908H1.25213L1.77556 8.66785L1.6882 8.77274C1.68426 8.77744 1.68299 8.78315 1.67982 8.78823C1.67512 8.79572 1.67055 8.80271 1.6675 8.81109C1.66432 8.81972 1.66343 8.82836 1.66216 8.83737C1.66128 8.84309 1.65874 8.84804 1.65874 8.85401V12.8086C1.44032 12.8655 1.27778 13.0626 1.27778 13.2986V13.5108C1.27778 13.8139 1.52426 14.0604 1.82737 14.0604H2.16668V15.7498C2.16668 16.1259 2.41239 16.4453 2.75144 16.5571C2.75208 16.5573 2.75271 16.5574 2.75335 16.5577C2.8364 16.5849 2.9249 16.6 3.01697 16.6H4.10993C4.20199 16.6 4.2905 16.5849 4.37355 16.5577C4.37419 16.5574 4.37482 16.5573 4.37546 16.5569C4.71451 16.4451 4.96022 16.1257 4.96022 15.7497V14.0604H10.0396V15.7498C10.0396 16.1259 10.2853 16.4453 10.6244 16.5571C10.625 16.5573 10.6257 16.5574 10.6263 16.5577C10.7093 16.5849 10.7979 16.6 10.8899 16.6H11.9829C12.0749 16.6 12.1635 16.5849 12.2465 16.5577C12.2471 16.5574 12.2478 16.5573 12.2484 16.5569C12.5875 16.4451 12.8332 16.1257 12.8332 15.7497V14.0604H13.1725C13.4756 14.0604 13.7221 13.8139 13.7221 13.5108V13.2986C13.7221 13.0627 13.5595 12.8655 13.3411 12.8086V8.85401C13.3411 8.84804 13.3386 8.84309 13.3378 8.83737C13.3367 8.82836 13.3357 8.81972 13.3325 8.81109C13.3294 8.80271 13.3247 8.7956 13.3202 8.7881C13.317 8.78302 13.3157 8.77731 13.3118 8.77261L13.2244 8.66772L13.748 8.21908H14.03C14.2806 8.21908 14.4842 8.0154 14.4842 7.76486V6.13361C14.4842 5.88307 14.2806 5.67938 14.03 5.67938ZM12.4229 12.7905C12.6823 12.4857 12.8334 12.0777 12.8334 11.6477C12.8334 11.6063 12.8315 11.564 12.8282 11.5207H13.0874V12.7905H12.4229ZM5.31349 12.7905L5.16518 11.9017H9.83467L9.68636 12.7905H5.31349ZM4.96086 10.6318C4.96022 10.4672 5.03794 10.3366 5.10981 10.2517C5.3093 10.0162 5.67642 9.86989 6.06779 9.86989H8.93244C9.32381 9.86989 9.69093 10.0162 9.89042 10.2517C9.96217 10.3367 10.04 10.4672 10.0394 10.6318H4.96086ZM10.0043 10.8858L9.87721 11.6477H5.12289L4.99578 10.8858H10.0043ZM10.2831 10.7578C10.3222 10.5232 10.2514 10.2853 10.0841 10.0877C9.83391 9.7923 9.40331 9.61592 8.93232 9.61592H6.06779C5.5968 9.61592 5.16619 9.7923 4.91616 10.0877C4.74879 10.2854 4.67806 10.5234 4.71717 10.7578L5.0561 12.7905H4.19844V12.4818C4.19844 11.8119 3.65329 11.2667 2.98332 11.2667H1.91271V8.98099H13.0874V11.2667H12.0168C11.3468 11.2667 10.8017 11.8119 10.8017 12.4818V12.7905H9.94401L10.2831 10.7578ZM1.91271 11.5207H2.17188C2.16858 11.564 2.16668 11.6063 2.16668 11.6477C2.16668 12.0777 2.31779 12.4857 2.57722 12.7905H1.91271V11.5207ZM2.93557 12.7905C2.61316 12.5285 2.42065 12.1025 2.42065 11.6477C2.42065 11.6068 2.42319 11.5644 2.427 11.5207H2.68592C2.67881 11.5626 2.67462 11.605 2.67462 11.6477C2.67462 12.0679 3.01633 12.4096 3.43653 12.4096C3.61304 12.4096 3.77926 12.3497 3.91285 12.2418C3.93279 12.3187 3.94447 12.3989 3.94447 12.4818V12.7905H2.93557ZM2.947 11.5207H2.98319C3.33316 11.5207 3.6392 11.7093 3.8072 11.9897C3.71132 12.094 3.58002 12.1556 3.43653 12.1556C3.1564 12.1556 2.92859 11.9278 2.92859 11.6477C2.92859 11.6046 2.93608 11.5623 2.947 11.5207ZM12.0715 11.6477C12.0715 11.9278 11.8437 12.1556 11.5636 12.1556C11.4201 12.1556 11.2888 12.094 11.1928 11.9897C11.3609 11.7093 11.6668 11.5207 12.0168 11.5207H12.053C12.064 11.5623 12.0715 11.6046 12.0715 11.6477ZM11.0556 12.4818C11.0556 12.3988 11.0673 12.3187 11.0873 12.2417C11.2208 12.3497 11.3871 12.4096 11.5636 12.4096C11.9838 12.4096 12.3255 12.0679 12.3255 11.6477C12.3255 11.605 12.3213 11.5626 12.3142 11.5207H12.5731C12.5769 11.5644 12.5795 11.6068 12.5795 11.6477C12.5795 12.1025 12.3869 12.5285 12.0645 12.7905H11.0556V12.4818ZM12.9431 8.72702H2.05696L2.4802 8.21908H12.5199L12.9431 8.72702ZM11.6906 7.96511H6.86513C6.86513 7.19495 6.23845 6.56828 5.46829 6.56828C4.69812 6.56828 4.07145 7.19495 4.07145 7.96511H3.30954V5.78668C3.30954 5.63748 3.44707 5.50478 3.64415 5.46401C4.43209 5.30058 5.05457 5.17144 7.50005 5.17144C9.94553 5.17144 10.568 5.30058 11.356 5.46401C11.553 5.50478 11.6906 5.63748 11.6906 5.78668V7.96511ZM4.83336 7.96511C4.83336 7.61502 5.11819 7.33019 5.46829 7.33019C5.81839 7.33019 6.10322 7.61502 6.10322 7.96511H4.83336ZM5.46829 7.07622C4.97825 7.07622 4.57939 7.47508 4.57939 7.96511H4.32542C4.32542 7.33489 4.83806 6.82225 5.46829 6.82225C6.09852 6.82225 6.61116 7.33489 6.61116 7.96511H6.35719C6.35719 7.47508 5.95833 7.07622 5.46829 7.07622ZM10.4669 2.10348C11.0921 2.17929 11.5636 2.64888 11.5636 3.19568V4.4588C11.1496 4.38756 10.72 4.34121 9.99556 4.31404L9.50426 1.98665L10.4669 2.10348ZM7.15834 0.853946H7.8419C8.51631 0.853946 9.08419 1.22639 9.19264 1.73967L9.73436 4.30566C9.17968 4.28966 8.4673 4.28254 7.50005 4.28254C6.53281 4.28254 5.82042 4.28966 5.26588 4.30553L5.80759 1.73954C5.91591 1.22639 6.48392 0.853946 7.15834 0.853946ZM3.43653 3.19568C3.43653 2.64875 3.90802 2.17916 4.53317 2.10335L5.49585 1.98665L5.00454 4.31404C4.28022 4.34121 3.8505 4.38756 3.43653 4.4588V3.19568ZM2.54763 5.30414C2.54763 5.06198 2.7696 4.84776 3.08745 4.7835C3.99018 4.60052 4.56771 4.53651 7.50005 4.53651C10.4324 4.53651 11.0099 4.60052 11.9127 4.7835C12.2305 4.84776 12.4525 5.06185 12.4525 5.30414V7.96511H11.9445V5.78668C11.9445 5.51582 11.7237 5.2809 11.4075 5.21525C10.5173 5.03061 9.8522 4.91747 7.50005 4.91747C5.14791 4.91747 4.48276 5.03061 3.59259 5.21525C3.2764 5.28077 3.05557 5.51582 3.05557 5.78668V7.96511H2.54763V5.30414ZM0.769839 7.76486V6.13361C0.769839 6.02313 0.859618 5.93335 0.970095 5.93335H1.33149C1.44197 5.93335 1.53175 6.02313 1.53175 6.13361V7.76486C1.53175 7.87533 1.44197 7.96511 1.33149 7.96511H0.970095C0.859618 7.96511 0.769839 7.87533 0.769839 7.76486ZM1.56464 8.15267C1.69645 8.07305 1.78572 7.92981 1.78572 7.76486V6.13361C1.78572 5.99786 1.72464 5.87722 1.63004 5.79392L2.29366 5.3957V8.046L1.93798 8.4728L1.56464 8.15267ZM2.42065 15.7498V14.0604H2.67462V16.2365C2.52147 16.1285 2.42065 15.9511 2.42065 15.7498ZM2.92859 16.3372V14.0604H3.18256V16.3461H3.01697C2.98675 16.3461 2.95767 16.3416 2.92859 16.3372ZM3.6905 14.0604V16.3461H3.43653V14.0604H3.6905ZM3.94447 16.3461V14.0604H4.19844V16.3372C4.16936 16.3416 4.14028 16.3461 4.11006 16.3461H3.94447ZM4.70638 15.7498C4.70638 15.9511 4.60555 16.1286 4.45241 16.2367V14.0604H4.70638V15.7498ZM10.2937 15.7498V14.0604H10.5477V16.2365C10.3946 16.1285 10.2937 15.9511 10.2937 15.7498ZM10.8017 16.3372V14.0604H11.0556V16.3461H10.89C10.8598 16.3461 10.8307 16.3416 10.8017 16.3372ZM11.5636 14.0604V16.3461H11.3096V14.0604H11.5636ZM11.8175 16.3461V14.0604H12.0715V16.3372C12.0424 16.3416 12.0134 16.3461 11.9831 16.3461H11.8175ZM12.5795 15.7498C12.5795 15.9511 12.4786 16.1286 12.3255 16.2367V14.0604H12.5795V15.7498ZM13.4684 13.2986V13.5108C13.4684 13.6739 13.3358 13.8064 13.1727 13.8064H1.82737C1.66432 13.8064 1.53175 13.6739 1.53175 13.5108V13.2986C1.53175 13.1584 1.64566 13.0445 1.78585 13.0445H13.2143C13.3544 13.0445 13.4684 13.1584 13.4684 13.2986ZM12.7064 8.046V5.3957L13.3701 5.79392C13.2753 5.87722 13.2144 5.99786 13.2144 6.13361V7.76486C13.2144 7.92981 13.3037 8.07305 13.4355 8.15267L13.062 8.4728L12.7064 8.046ZM14.2303 7.76486C14.2303 7.87533 14.1405 7.96511 14.03 7.96511H13.6686C13.5581 7.96511 13.4684 7.87533 13.4684 7.76486V6.13361C13.4684 6.02313 13.5581 5.93335 13.6686 5.93335H14.03C14.1405 5.93335 14.2303 6.02313 14.2303 6.13361V7.76486Z" />
      </mask>
      <path
        d="M14.03 5.67938H13.6728L12.6614 5.07252C12.5628 4.81182 12.3042 4.60369 11.9629 4.53448C11.9135 4.52445 11.8653 4.51493 11.8174 4.50566V3.19568C11.8174 2.5205 11.2499 1.94246 10.4973 1.85116L9.44864 1.72405L9.44077 1.68697C9.30807 1.05725 8.63543 0.599976 7.84177 0.599976H7.15821C6.36455 0.599976 5.69191 1.05725 5.55896 1.6871L5.55108 1.72417L4.50244 1.85129C3.75005 1.94246 3.18256 2.5205 3.18256 3.19568V4.50553C3.13468 4.5148 3.08643 4.52445 3.03703 4.53436C2.69582 4.60331 2.43715 4.81156 2.33861 5.07239L1.3273 5.67938H0.970095C0.719553 5.67938 0.515869 5.88307 0.515869 6.13361V7.76486C0.515869 8.0154 0.719553 8.21908 0.970095 8.21908H1.25213L1.77556 8.66785L1.6882 8.77274C1.68426 8.77744 1.68299 8.78315 1.67982 8.78823C1.67512 8.79572 1.67055 8.80271 1.6675 8.81109C1.66432 8.81972 1.66343 8.82836 1.66216 8.83737C1.66128 8.84309 1.65874 8.84804 1.65874 8.85401V12.8086C1.44032 12.8655 1.27778 13.0626 1.27778 13.2986V13.5108C1.27778 13.8139 1.52426 14.0604 1.82737 14.0604H2.16668V15.7498C2.16668 16.1259 2.41239 16.4453 2.75144 16.5571C2.75208 16.5573 2.75271 16.5574 2.75335 16.5577C2.8364 16.5849 2.9249 16.6 3.01697 16.6H4.10993C4.20199 16.6 4.2905 16.5849 4.37355 16.5577C4.37419 16.5574 4.37482 16.5573 4.37546 16.5569C4.71451 16.4451 4.96022 16.1257 4.96022 15.7497V14.0604H10.0396V15.7498C10.0396 16.1259 10.2853 16.4453 10.6244 16.5571C10.625 16.5573 10.6257 16.5574 10.6263 16.5577C10.7093 16.5849 10.7979 16.6 10.8899 16.6H11.9829C12.0749 16.6 12.1635 16.5849 12.2465 16.5577C12.2471 16.5574 12.2478 16.5573 12.2484 16.5569C12.5875 16.4451 12.8332 16.1257 12.8332 15.7497V14.0604H13.1725C13.4756 14.0604 13.7221 13.8139 13.7221 13.5108V13.2986C13.7221 13.0627 13.5595 12.8655 13.3411 12.8086V8.85401C13.3411 8.84804 13.3386 8.84309 13.3378 8.83737C13.3367 8.82836 13.3357 8.81972 13.3325 8.81109C13.3294 8.80271 13.3247 8.7956 13.3202 8.7881C13.317 8.78302 13.3157 8.77731 13.3118 8.77261L13.2244 8.66772L13.748 8.21908H14.03C14.2806 8.21908 14.4842 8.0154 14.4842 7.76486V6.13361C14.4842 5.88307 14.2806 5.67938 14.03 5.67938ZM12.4229 12.7905C12.6823 12.4857 12.8334 12.0777 12.8334 11.6477C12.8334 11.6063 12.8315 11.564 12.8282 11.5207H13.0874V12.7905H12.4229ZM5.31349 12.7905L5.16518 11.9017H9.83467L9.68636 12.7905H5.31349ZM4.96086 10.6318C4.96022 10.4672 5.03794 10.3366 5.10981 10.2517C5.3093 10.0162 5.67642 9.86989 6.06779 9.86989H8.93244C9.32381 9.86989 9.69093 10.0162 9.89042 10.2517C9.96217 10.3367 10.04 10.4672 10.0394 10.6318H4.96086ZM10.0043 10.8858L9.87721 11.6477H5.12289L4.99578 10.8858H10.0043ZM10.2831 10.7578C10.3222 10.5232 10.2514 10.2853 10.0841 10.0877C9.83391 9.7923 9.40331 9.61592 8.93232 9.61592H6.06779C5.5968 9.61592 5.16619 9.7923 4.91616 10.0877C4.74879 10.2854 4.67806 10.5234 4.71717 10.7578L5.0561 12.7905H4.19844V12.4818C4.19844 11.8119 3.65329 11.2667 2.98332 11.2667H1.91271V8.98099H13.0874V11.2667H12.0168C11.3468 11.2667 10.8017 11.8119 10.8017 12.4818V12.7905H9.94401L10.2831 10.7578ZM1.91271 11.5207H2.17188C2.16858 11.564 2.16668 11.6063 2.16668 11.6477C2.16668 12.0777 2.31779 12.4857 2.57722 12.7905H1.91271V11.5207ZM2.93557 12.7905C2.61316 12.5285 2.42065 12.1025 2.42065 11.6477C2.42065 11.6068 2.42319 11.5644 2.427 11.5207H2.68592C2.67881 11.5626 2.67462 11.605 2.67462 11.6477C2.67462 12.0679 3.01633 12.4096 3.43653 12.4096C3.61304 12.4096 3.77926 12.3497 3.91285 12.2418C3.93279 12.3187 3.94447 12.3989 3.94447 12.4818V12.7905H2.93557ZM2.947 11.5207H2.98319C3.33316 11.5207 3.6392 11.7093 3.8072 11.9897C3.71132 12.094 3.58002 12.1556 3.43653 12.1556C3.1564 12.1556 2.92859 11.9278 2.92859 11.6477C2.92859 11.6046 2.93608 11.5623 2.947 11.5207ZM12.0715 11.6477C12.0715 11.9278 11.8437 12.1556 11.5636 12.1556C11.4201 12.1556 11.2888 12.094 11.1928 11.9897C11.3609 11.7093 11.6668 11.5207 12.0168 11.5207H12.053C12.064 11.5623 12.0715 11.6046 12.0715 11.6477ZM11.0556 12.4818C11.0556 12.3988 11.0673 12.3187 11.0873 12.2417C11.2208 12.3497 11.3871 12.4096 11.5636 12.4096C11.9838 12.4096 12.3255 12.0679 12.3255 11.6477C12.3255 11.605 12.3213 11.5626 12.3142 11.5207H12.5731C12.5769 11.5644 12.5795 11.6068 12.5795 11.6477C12.5795 12.1025 12.3869 12.5285 12.0645 12.7905H11.0556V12.4818ZM12.9431 8.72702H2.05696L2.4802 8.21908H12.5199L12.9431 8.72702ZM11.6906 7.96511H6.86513C6.86513 7.19495 6.23845 6.56828 5.46829 6.56828C4.69812 6.56828 4.07145 7.19495 4.07145 7.96511H3.30954V5.78668C3.30954 5.63748 3.44707 5.50478 3.64415 5.46401C4.43209 5.30058 5.05457 5.17144 7.50005 5.17144C9.94553 5.17144 10.568 5.30058 11.356 5.46401C11.553 5.50478 11.6906 5.63748 11.6906 5.78668V7.96511ZM4.83336 7.96511C4.83336 7.61502 5.11819 7.33019 5.46829 7.33019C5.81839 7.33019 6.10322 7.61502 6.10322 7.96511H4.83336ZM5.46829 7.07622C4.97825 7.07622 4.57939 7.47508 4.57939 7.96511H4.32542C4.32542 7.33489 4.83806 6.82225 5.46829 6.82225C6.09852 6.82225 6.61116 7.33489 6.61116 7.96511H6.35719C6.35719 7.47508 5.95833 7.07622 5.46829 7.07622ZM10.4669 2.10348C11.0921 2.17929 11.5636 2.64888 11.5636 3.19568V4.4588C11.1496 4.38756 10.72 4.34121 9.99556 4.31404L9.50426 1.98665L10.4669 2.10348ZM7.15834 0.853946H7.8419C8.51631 0.853946 9.08419 1.22639 9.19264 1.73967L9.73436 4.30566C9.17968 4.28966 8.4673 4.28254 7.50005 4.28254C6.53281 4.28254 5.82042 4.28966 5.26588 4.30553L5.80759 1.73954C5.91591 1.22639 6.48392 0.853946 7.15834 0.853946ZM3.43653 3.19568C3.43653 2.64875 3.90802 2.17916 4.53317 2.10335L5.49585 1.98665L5.00454 4.31404C4.28022 4.34121 3.8505 4.38756 3.43653 4.4588V3.19568ZM2.54763 5.30414C2.54763 5.06198 2.7696 4.84776 3.08745 4.7835C3.99018 4.60052 4.56771 4.53651 7.50005 4.53651C10.4324 4.53651 11.0099 4.60052 11.9127 4.7835C12.2305 4.84776 12.4525 5.06185 12.4525 5.30414V7.96511H11.9445V5.78668C11.9445 5.51582 11.7237 5.2809 11.4075 5.21525C10.5173 5.03061 9.8522 4.91747 7.50005 4.91747C5.14791 4.91747 4.48276 5.03061 3.59259 5.21525C3.2764 5.28077 3.05557 5.51582 3.05557 5.78668V7.96511H2.54763V5.30414ZM0.769839 7.76486V6.13361C0.769839 6.02313 0.859618 5.93335 0.970095 5.93335H1.33149C1.44197 5.93335 1.53175 6.02313 1.53175 6.13361V7.76486C1.53175 7.87533 1.44197 7.96511 1.33149 7.96511H0.970095C0.859618 7.96511 0.769839 7.87533 0.769839 7.76486ZM1.56464 8.15267C1.69645 8.07305 1.78572 7.92981 1.78572 7.76486V6.13361C1.78572 5.99786 1.72464 5.87722 1.63004 5.79392L2.29366 5.3957V8.046L1.93798 8.4728L1.56464 8.15267ZM2.42065 15.7498V14.0604H2.67462V16.2365C2.52147 16.1285 2.42065 15.9511 2.42065 15.7498ZM2.92859 16.3372V14.0604H3.18256V16.3461H3.01697C2.98675 16.3461 2.95767 16.3416 2.92859 16.3372ZM3.6905 14.0604V16.3461H3.43653V14.0604H3.6905ZM3.94447 16.3461V14.0604H4.19844V16.3372C4.16936 16.3416 4.14028 16.3461 4.11006 16.3461H3.94447ZM4.70638 15.7498C4.70638 15.9511 4.60555 16.1286 4.45241 16.2367V14.0604H4.70638V15.7498ZM10.2937 15.7498V14.0604H10.5477V16.2365C10.3946 16.1285 10.2937 15.9511 10.2937 15.7498ZM10.8017 16.3372V14.0604H11.0556V16.3461H10.89C10.8598 16.3461 10.8307 16.3416 10.8017 16.3372ZM11.5636 14.0604V16.3461H11.3096V14.0604H11.5636ZM11.8175 16.3461V14.0604H12.0715V16.3372C12.0424 16.3416 12.0134 16.3461 11.9831 16.3461H11.8175ZM12.5795 15.7498C12.5795 15.9511 12.4786 16.1286 12.3255 16.2367V14.0604H12.5795V15.7498ZM13.4684 13.2986V13.5108C13.4684 13.6739 13.3358 13.8064 13.1727 13.8064H1.82737C1.66432 13.8064 1.53175 13.6739 1.53175 13.5108V13.2986C1.53175 13.1584 1.64566 13.0445 1.78585 13.0445H13.2143C13.3544 13.0445 13.4684 13.1584 13.4684 13.2986ZM12.7064 8.046V5.3957L13.3701 5.79392C13.2753 5.87722 13.2144 5.99786 13.2144 6.13361V7.76486C13.2144 7.92981 13.3037 8.07305 13.4355 8.15267L13.062 8.4728L12.7064 8.046ZM14.2303 7.76486C14.2303 7.87533 14.1405 7.96511 14.03 7.96511H13.6686C13.5581 7.96511 13.4684 7.87533 13.4684 7.76486V6.13361C13.4684 6.02313 13.5581 5.93335 13.6686 5.93335H14.03C14.1405 5.93335 14.2303 6.02313 14.2303 6.13361V7.76486Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M14.03 5.67938H13.6728L12.6614 5.07252C12.5628 4.81182 12.3042 4.60369 11.9629 4.53448C11.9135 4.52445 11.8653 4.51493 11.8174 4.50566V3.19568C11.8174 2.5205 11.2499 1.94246 10.4973 1.85116L9.44864 1.72405L9.44077 1.68697C9.30807 1.05725 8.63543 0.599976 7.84177 0.599976H7.15821C6.36455 0.599976 5.69191 1.05725 5.55896 1.6871L5.55108 1.72417L4.50244 1.85129C3.75005 1.94246 3.18256 2.5205 3.18256 3.19568V4.50553C3.13468 4.5148 3.08643 4.52445 3.03703 4.53436C2.69582 4.60331 2.43715 4.81156 2.33861 5.07239L1.3273 5.67938H0.970095C0.719553 5.67938 0.515869 5.88307 0.515869 6.13361V7.76486C0.515869 8.0154 0.719553 8.21908 0.970095 8.21908H1.25213L1.77556 8.66785L1.6882 8.77274C1.68426 8.77744 1.68299 8.78315 1.67982 8.78823C1.67512 8.79572 1.67055 8.80271 1.6675 8.81109C1.66432 8.81972 1.66343 8.82836 1.66216 8.83737C1.66128 8.84309 1.65874 8.84804 1.65874 8.85401V12.8086C1.44032 12.8655 1.27778 13.0626 1.27778 13.2986V13.5108C1.27778 13.8139 1.52426 14.0604 1.82737 14.0604H2.16668V15.7498C2.16668 16.1259 2.41239 16.4453 2.75144 16.5571C2.75208 16.5573 2.75271 16.5574 2.75335 16.5577C2.8364 16.5849 2.9249 16.6 3.01697 16.6H4.10993C4.20199 16.6 4.2905 16.5849 4.37355 16.5577C4.37419 16.5574 4.37482 16.5573 4.37546 16.5569C4.71451 16.4451 4.96022 16.1257 4.96022 15.7497V14.0604H10.0396V15.7498C10.0396 16.1259 10.2853 16.4453 10.6244 16.5571C10.625 16.5573 10.6257 16.5574 10.6263 16.5577C10.7093 16.5849 10.7979 16.6 10.8899 16.6H11.9829C12.0749 16.6 12.1635 16.5849 12.2465 16.5577C12.2471 16.5574 12.2478 16.5573 12.2484 16.5569C12.5875 16.4451 12.8332 16.1257 12.8332 15.7497V14.0604H13.1725C13.4756 14.0604 13.7221 13.8139 13.7221 13.5108V13.2986C13.7221 13.0627 13.5595 12.8655 13.3411 12.8086V8.85401C13.3411 8.84804 13.3386 8.84309 13.3378 8.83737C13.3367 8.82836 13.3357 8.81972 13.3325 8.81109C13.3294 8.80271 13.3247 8.7956 13.3202 8.7881C13.317 8.78302 13.3157 8.77731 13.3118 8.77261L13.2244 8.66772L13.748 8.21908H14.03C14.2806 8.21908 14.4842 8.0154 14.4842 7.76486V6.13361C14.4842 5.88307 14.2806 5.67938 14.03 5.67938ZM12.4229 12.7905C12.6823 12.4857 12.8334 12.0777 12.8334 11.6477C12.8334 11.6063 12.8315 11.564 12.8282 11.5207H13.0874V12.7905H12.4229ZM5.31349 12.7905L5.16518 11.9017H9.83467L9.68636 12.7905H5.31349ZM4.96086 10.6318C4.96022 10.4672 5.03794 10.3366 5.10981 10.2517C5.3093 10.0162 5.67642 9.86989 6.06779 9.86989H8.93244C9.32381 9.86989 9.69093 10.0162 9.89042 10.2517C9.96217 10.3367 10.04 10.4672 10.0394 10.6318H4.96086ZM10.0043 10.8858L9.87721 11.6477H5.12289L4.99578 10.8858H10.0043ZM10.2831 10.7578C10.3222 10.5232 10.2514 10.2853 10.0841 10.0877C9.83391 9.7923 9.40331 9.61592 8.93232 9.61592H6.06779C5.5968 9.61592 5.16619 9.7923 4.91616 10.0877C4.74879 10.2854 4.67806 10.5234 4.71717 10.7578L5.0561 12.7905H4.19844V12.4818C4.19844 11.8119 3.65329 11.2667 2.98332 11.2667H1.91271V8.98099H13.0874V11.2667H12.0168C11.3468 11.2667 10.8017 11.8119 10.8017 12.4818V12.7905H9.94401L10.2831 10.7578ZM1.91271 11.5207H2.17188C2.16858 11.564 2.16668 11.6063 2.16668 11.6477C2.16668 12.0777 2.31779 12.4857 2.57722 12.7905H1.91271V11.5207ZM2.93557 12.7905C2.61316 12.5285 2.42065 12.1025 2.42065 11.6477C2.42065 11.6068 2.42319 11.5644 2.427 11.5207H2.68592C2.67881 11.5626 2.67462 11.605 2.67462 11.6477C2.67462 12.0679 3.01633 12.4096 3.43653 12.4096C3.61304 12.4096 3.77926 12.3497 3.91285 12.2418C3.93279 12.3187 3.94447 12.3989 3.94447 12.4818V12.7905H2.93557ZM2.947 11.5207H2.98319C3.33316 11.5207 3.6392 11.7093 3.8072 11.9897C3.71132 12.094 3.58002 12.1556 3.43653 12.1556C3.1564 12.1556 2.92859 11.9278 2.92859 11.6477C2.92859 11.6046 2.93608 11.5623 2.947 11.5207ZM12.0715 11.6477C12.0715 11.9278 11.8437 12.1556 11.5636 12.1556C11.4201 12.1556 11.2888 12.094 11.1928 11.9897C11.3609 11.7093 11.6668 11.5207 12.0168 11.5207H12.053C12.064 11.5623 12.0715 11.6046 12.0715 11.6477ZM11.0556 12.4818C11.0556 12.3988 11.0673 12.3187 11.0873 12.2417C11.2208 12.3497 11.3871 12.4096 11.5636 12.4096C11.9838 12.4096 12.3255 12.0679 12.3255 11.6477C12.3255 11.605 12.3213 11.5626 12.3142 11.5207H12.5731C12.5769 11.5644 12.5795 11.6068 12.5795 11.6477C12.5795 12.1025 12.3869 12.5285 12.0645 12.7905H11.0556V12.4818ZM12.9431 8.72702H2.05696L2.4802 8.21908H12.5199L12.9431 8.72702ZM11.6906 7.96511H6.86513C6.86513 7.19495 6.23845 6.56828 5.46829 6.56828C4.69812 6.56828 4.07145 7.19495 4.07145 7.96511H3.30954V5.78668C3.30954 5.63748 3.44707 5.50478 3.64415 5.46401C4.43209 5.30058 5.05457 5.17144 7.50005 5.17144C9.94553 5.17144 10.568 5.30058 11.356 5.46401C11.553 5.50478 11.6906 5.63748 11.6906 5.78668V7.96511ZM4.83336 7.96511C4.83336 7.61502 5.11819 7.33019 5.46829 7.33019C5.81839 7.33019 6.10322 7.61502 6.10322 7.96511H4.83336ZM5.46829 7.07622C4.97825 7.07622 4.57939 7.47508 4.57939 7.96511H4.32542C4.32542 7.33489 4.83806 6.82225 5.46829 6.82225C6.09852 6.82225 6.61116 7.33489 6.61116 7.96511H6.35719C6.35719 7.47508 5.95833 7.07622 5.46829 7.07622ZM10.4669 2.10348C11.0921 2.17929 11.5636 2.64888 11.5636 3.19568V4.4588C11.1496 4.38756 10.72 4.34121 9.99556 4.31404L9.50426 1.98665L10.4669 2.10348ZM7.15834 0.853946H7.8419C8.51631 0.853946 9.08419 1.22639 9.19264 1.73967L9.73436 4.30566C9.17968 4.28966 8.4673 4.28254 7.50005 4.28254C6.53281 4.28254 5.82042 4.28966 5.26588 4.30553L5.80759 1.73954C5.91591 1.22639 6.48392 0.853946 7.15834 0.853946ZM3.43653 3.19568C3.43653 2.64875 3.90802 2.17916 4.53317 2.10335L5.49585 1.98665L5.00454 4.31404C4.28022 4.34121 3.8505 4.38756 3.43653 4.4588V3.19568ZM2.54763 5.30414C2.54763 5.06198 2.7696 4.84776 3.08745 4.7835C3.99018 4.60052 4.56771 4.53651 7.50005 4.53651C10.4324 4.53651 11.0099 4.60052 11.9127 4.7835C12.2305 4.84776 12.4525 5.06185 12.4525 5.30414V7.96511H11.9445V5.78668C11.9445 5.51582 11.7237 5.2809 11.4075 5.21525C10.5173 5.03061 9.8522 4.91747 7.50005 4.91747C5.14791 4.91747 4.48276 5.03061 3.59259 5.21525C3.2764 5.28077 3.05557 5.51582 3.05557 5.78668V7.96511H2.54763V5.30414ZM0.769839 7.76486V6.13361C0.769839 6.02313 0.859618 5.93335 0.970095 5.93335H1.33149C1.44197 5.93335 1.53175 6.02313 1.53175 6.13361V7.76486C1.53175 7.87533 1.44197 7.96511 1.33149 7.96511H0.970095C0.859618 7.96511 0.769839 7.87533 0.769839 7.76486ZM1.56464 8.15267C1.69645 8.07305 1.78572 7.92981 1.78572 7.76486V6.13361C1.78572 5.99786 1.72464 5.87722 1.63004 5.79392L2.29366 5.3957V8.046L1.93798 8.4728L1.56464 8.15267ZM2.42065 15.7498V14.0604H2.67462V16.2365C2.52147 16.1285 2.42065 15.9511 2.42065 15.7498ZM2.92859 16.3372V14.0604H3.18256V16.3461H3.01697C2.98675 16.3461 2.95767 16.3416 2.92859 16.3372ZM3.6905 14.0604V16.3461H3.43653V14.0604H3.6905ZM3.94447 16.3461V14.0604H4.19844V16.3372C4.16936 16.3416 4.14028 16.3461 4.11006 16.3461H3.94447ZM4.70638 15.7498C4.70638 15.9511 4.60555 16.1286 4.45241 16.2367V14.0604H4.70638V15.7498ZM10.2937 15.7498V14.0604H10.5477V16.2365C10.3946 16.1285 10.2937 15.9511 10.2937 15.7498ZM10.8017 16.3372V14.0604H11.0556V16.3461H10.89C10.8598 16.3461 10.8307 16.3416 10.8017 16.3372ZM11.5636 14.0604V16.3461H11.3096V14.0604H11.5636ZM11.8175 16.3461V14.0604H12.0715V16.3372C12.0424 16.3416 12.0134 16.3461 11.9831 16.3461H11.8175ZM12.5795 15.7498C12.5795 15.9511 12.4786 16.1286 12.3255 16.2367V14.0604H12.5795V15.7498ZM13.4684 13.2986V13.5108C13.4684 13.6739 13.3358 13.8064 13.1727 13.8064H1.82737C1.66432 13.8064 1.53175 13.6739 1.53175 13.5108V13.2986C1.53175 13.1584 1.64566 13.0445 1.78585 13.0445H13.2143C13.3544 13.0445 13.4684 13.1584 13.4684 13.2986ZM12.7064 8.046V5.3957L13.3701 5.79392C13.2753 5.87722 13.2144 5.99786 13.2144 6.13361V7.76486C13.2144 7.92981 13.3037 8.07305 13.4355 8.15267L13.062 8.4728L12.7064 8.046ZM14.2303 7.76486C14.2303 7.87533 14.1405 7.96511 14.03 7.96511H13.6686C13.5581 7.96511 13.4684 7.87533 13.4684 7.76486V6.13361C13.4684 6.02313 13.5581 5.93335 13.6686 5.93335H14.03C14.1405 5.93335 14.2303 6.02313 14.2303 6.13361V7.76486Z"
        stroke={isActive ? "#fff" : "#69776D"}
        strokeWidth="0.2"
        mask="url(#path-2-outside-1_529_6181)"
      />
      <path
        d="M11.5948 10.8857H12.2937C12.5212 10.8857 12.7062 10.7007 12.7062 10.4733V10.4093C12.7062 10.1818 12.5212 9.99683 12.2937 9.99683H11.5948C11.3674 9.99683 11.1824 10.1818 11.1824 10.4093V10.4733C11.1824 10.7007 11.3674 10.8857 11.5948 10.8857ZM11.4363 10.4093C11.4363 10.3219 11.5075 10.2508 11.5948 10.2508H12.2937C12.3811 10.2508 12.4522 10.3219 12.4522 10.4093V10.4733C12.4522 10.5606 12.3811 10.6318 12.2937 10.6318H11.5948C11.5075 10.6318 11.4363 10.5606 11.4363 10.4733V10.4093Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M8.32215 5.42535H6.67794C6.50118 5.42535 6.35718 5.56936 6.35718 5.74612V5.86637C6.35718 6.04326 6.50118 6.18726 6.67794 6.18726H8.32202C8.49891 6.18726 8.64291 6.04326 8.64291 5.8665V5.74625C8.64291 5.56936 8.49891 5.42535 8.32215 5.42535ZM8.38894 5.8665C8.38894 5.90333 8.35897 5.93329 8.32215 5.93329H6.67794C6.64112 5.93329 6.61115 5.90333 6.61115 5.8665V5.74625C6.61115 5.70929 6.64112 5.67932 6.67794 5.67932H8.32202C8.35897 5.67932 8.38894 5.70929 8.38894 5.74612V5.8665Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M6.23015 3.64765H7.24603C7.31626 3.64765 7.37302 3.59088 7.37302 3.52066C7.37302 3.45044 7.31626 3.39368 7.24603 3.39368H6.45619L6.64374 3.08599L6.65835 3.13882C6.67397 3.19507 6.72489 3.2319 6.78063 3.2319C6.79193 3.2319 6.80336 3.23037 6.81466 3.22733C6.88222 3.20866 6.92197 3.13869 6.90317 3.07113L6.80743 2.72485C6.79257 2.671 6.74419 2.63342 6.68831 2.63202C6.67536 2.63227 6.66266 2.63342 6.65035 2.63672L6.27676 2.72307C6.20844 2.73881 6.16577 2.807 6.18152 2.87532C6.19739 2.94377 6.26571 2.98656 6.33377 2.97056L6.43041 2.94821L6.12183 3.4545C6.09796 3.49374 6.09707 3.54276 6.11942 3.58276C6.1419 3.62288 6.18431 3.64765 6.23015 3.64765Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M8.09747 3.17686C8.04782 3.12721 7.96757 3.12721 7.91792 3.17686L7.66395 3.43083C7.6143 3.48048 7.6143 3.56074 7.66395 3.61039L7.91792 3.86436C7.94268 3.88912 7.97519 3.90157 8.0077 3.90157C8.0402 3.90157 8.07271 3.88912 8.09747 3.86436C8.14713 3.81471 8.14713 3.73445 8.09747 3.6848L8.06471 3.65204C8.25252 3.65534 8.39373 3.65712 8.49951 3.65712C8.80529 3.65712 8.82142 3.64341 8.85202 3.61725C8.89837 3.57763 8.91005 3.51058 8.87983 3.45763L8.37189 2.56873C8.3371 2.50791 8.25938 2.48645 8.19868 2.52149C8.13786 2.55629 8.11665 2.63387 8.15144 2.6947L8.55564 3.40188C8.42535 3.40188 8.24414 3.40036 8.05646 3.39756L8.0976 3.35642C8.14713 3.30677 8.14713 3.22651 8.09747 3.17686Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
      <path
        d="M6.99205 2.37786C7.03306 2.37786 7.07345 2.35805 7.09783 2.32135L7.4845 1.74141L7.63078 2.03373L7.54024 2.0035L7.45999 2.24439L7.84094 2.37113C7.85415 2.37544 7.86774 2.3776 7.88094 2.3776C7.93415 2.3776 7.98367 2.34395 8.00133 2.29074L8.12831 1.91004L7.88755 1.82966L7.85758 1.91944L7.61364 1.43207C7.59332 1.39156 7.55307 1.36502 7.50786 1.3621C7.46304 1.35944 7.41961 1.38064 7.39434 1.41836L6.8864 2.18027C6.84741 2.23868 6.86316 2.31741 6.92157 2.3564C6.94341 2.37087 6.96792 2.37786 6.99205 2.37786Z"
        fill={isActive ? "#fff" : "#69776D"}
      />
    </svg>
  );
};

export default TruckIcon;
