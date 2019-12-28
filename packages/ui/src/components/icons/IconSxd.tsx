import React from 'react';
import wrap, { IconCommonInterface } from './iconWrap';

const IconSxd: React.FC<IconCommonInterface> = ({
  size
}) => (
  <svg width={size} height={size}  fill="none" viewBox={'0 0 13 7'} xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33395 4.71281C7.37609 4.76698 7.39715 4.8362 7.39715 4.92046C7.39715 4.99871 7.36706 5.07094 7.30687 5.13715C7.24668 5.20335 7.17746 5.23646 7.09922 5.23646C6.9668 5.23646 6.86448 5.19132 6.79225 5.10103L5.21229 3.10576L3.65038 5.11006C3.57815 5.19432 3.49689 5.23646 3.40661 5.23646C3.31633 5.23646 3.23808 5.20636 3.17187 5.14617C3.11168 5.08598 3.08159 5.01677 3.08159 4.93852C3.08159 4.85426 3.10265 4.77902 3.14479 4.71281L4.86018 2.61823L3.16284 0.532674C3.12071 0.472485 3.09965 0.400258 3.09965 0.315993C3.09965 0.231728 3.12974 0.159501 3.18993 0.0993121C3.25614 0.033104 3.3404 0 3.44272 0C3.55106 0 3.63533 0.0451419 3.69552 0.135426L5.25743 2.11264L6.81934 0.126397C6.87351 0.0481513 6.94874 0.00902838 7.04505 0.00902838C7.14135 0.00300946 7.2226 0.033104 7.28881 0.0993121C7.35502 0.159501 7.38812 0.228719 7.38812 0.306965C7.38812 0.379192 7.37007 0.4454 7.33395 0.505589L5.61856 2.61823L7.33395 4.71281Z"
      fill="#9CDCFE"/>
    <path d="M10.2501 0.0361135C11.0747 0.0361135 11.7308 0.312984 12.2183 0.866724C12.435 1.10748 12.5945 1.38134 12.6968 1.68831C12.8051 1.99527 12.8593 2.30525 12.8593 2.61823C12.8593 2.93121 12.8051 3.24119 12.6968 3.54815C12.5945 3.85512 12.435 4.12898 12.2183 4.36973C11.7308 4.92347 11.0747 5.20034 10.2501 5.20034H8.76044C8.67015 5.20034 8.59191 5.16724 8.5257 5.10103C8.45949 5.03482 8.42639 4.95658 8.42639 4.86629V0.379192C8.42639 0.288908 8.45949 0.210662 8.5257 0.144454C8.59191 0.072227 8.67015 0.0361135 8.76044 0.0361135H10.2501ZM10.1689 4.56836C10.7828 4.56836 11.2763 4.38779 11.6495 4.02666C12.0167 3.66552 12.2002 3.19604 12.2002 2.61823C12.2002 2.04041 12.0167 1.57094 11.6495 1.2098C11.2763 0.848667 10.7828 0.6681 10.1689 0.6681H9.10351V4.56836H10.1689Z"
      fill="#9CDCFE"/>
    <path d="M1.43551 6.37702C1.98323 6.37702 2.25408 6.20548 2.24807 5.8624C2.24807 5.75406 2.19389 5.6698 2.08555 5.60961C1.97721 5.54942 1.84179 5.49826 1.67928 5.45613C1.51677 5.414 1.33921 5.36885 1.1466 5.3207C0.953998 5.27255 0.773431 5.20634 0.604901 5.12208C0.436371 5.03781 0.297936 4.92947 0.189596 4.79706C0.0812554 4.65862 0.0270851 4.49009 0.0270851 4.29147C0.0270851 4.09284 0.0571797 3.92431 0.117369 3.78588C0.177558 3.64142 0.267842 3.51804 0.38822 3.41571C0.647034 3.19301 1.00817 3.08167 1.47162 3.08167C1.8448 3.08167 2.20292 3.14185 2.546 3.26223C2.61221 3.28631 2.66337 3.32844 2.69948 3.38863C2.74162 3.4428 2.76268 3.50299 2.76268 3.5692C2.76268 3.62939 2.73259 3.68958 2.6724 3.74976C2.61823 3.80995 2.56406 3.84005 2.50989 3.84005C2.45572 3.84005 2.38951 3.82801 2.31126 3.80394C2.07653 3.73171 1.81771 3.69559 1.53482 3.69559C1.25193 3.69559 1.03826 3.74375 0.893809 3.84005C0.749355 3.93635 0.677128 4.05673 0.677128 4.20118C0.677128 4.33962 0.731298 4.44194 0.839639 4.50815C0.947979 4.56834 1.0834 4.62251 1.24592 4.67066C1.41445 4.71881 1.59501 4.76395 1.78762 4.80608C1.98624 4.84822 2.16681 4.91142 2.32932 4.99568C2.71453 5.1943 2.90714 5.49826 2.90714 5.90755C2.90714 6.22655 2.78676 6.48235 2.546 6.67496C2.29321 6.89164 1.93508 6.99998 1.47162 6.99998C0.978074 6.99998 0.532674 6.88863 0.135426 6.66593C0.0511608 6.60574 0.00601892 6.53351 0 6.44925C0 6.35897 0.0270851 6.28373 0.0812554 6.22354C0.141445 6.15733 0.201634 6.12423 0.261823 6.12423C0.322012 6.12423 0.400258 6.14529 0.496561 6.18743C0.77945 6.31382 1.09243 6.37702 1.43551 6.37702Z"
      fill="#569CD6"/>
  </svg>
);

export default wrap(IconSxd);
