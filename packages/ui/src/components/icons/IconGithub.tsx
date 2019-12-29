import React from 'react';
import wrap, { IconCommonInterface } from './iconWrap';

const IconGithub: React.FC<IconCommonInterface> = ({
  size
}) => (
  <svg width={size} height={size}  fill="none" viewBox={'0 0 22 24'} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.35847 18.2531C7.35847 18.3469 7.25645 18.4219 7.12782 18.4219C6.98145 18.4359 6.87944 18.3609 6.87944 18.2531C6.87944 18.1594 6.98145 18.0844 7.11008 18.0844C7.24314 18.0703 7.35847 18.1453 7.35847 18.2531ZM5.97903 18.0422C5.94798 18.1359 6.03669 18.2437 6.16976 18.2719C6.28508 18.3187 6.41815 18.2719 6.44476 18.1781C6.47137 18.0844 6.3871 17.9766 6.25403 17.9344C6.13871 17.9016 6.01008 17.9484 5.97903 18.0422ZM7.93952 17.9625C7.81089 17.9953 7.72218 18.0844 7.73548 18.1922C7.74879 18.2859 7.86411 18.3469 7.99718 18.3141C8.12581 18.2812 8.21452 18.1922 8.20121 18.0984C8.1879 18.0094 8.06814 17.9484 7.93952 17.9625ZM10.8581 0C4.70605 0 0 4.93594 0 11.4375C0 16.6359 3.09597 21.0844 7.51815 22.65C8.08589 22.7578 8.28548 22.3875 8.28548 22.0828C8.28548 21.7922 8.27218 20.1891 8.27218 19.2047C8.27218 19.2047 5.16734 19.9078 4.51532 17.8078C4.51532 17.8078 4.00968 16.4437 3.28226 16.0922C3.28226 16.0922 2.26653 15.3562 3.35323 15.3703C3.35323 15.3703 4.45766 15.4641 5.06532 16.5797C6.03669 18.3891 7.66452 17.8687 8.29879 17.5594C8.40081 16.8094 8.68911 16.2891 9.00847 15.9797C6.52903 15.6891 4.02742 15.3094 4.02742 10.8C4.02742 9.51094 4.36452 8.86406 5.07419 8.03906C4.95887 7.73438 4.58185 6.47812 5.18952 4.85625C6.11653 4.55156 8.25 6.12188 8.25 6.12188C9.1371 5.85938 10.0907 5.72344 11.0355 5.72344C11.9802 5.72344 12.9339 5.85938 13.821 6.12188C13.821 6.12188 15.9544 4.54688 16.8815 4.85625C17.4891 6.48281 17.1121 7.73438 16.9968 8.03906C17.7065 8.86875 18.1411 9.51562 18.1411 10.8C18.1411 15.3234 15.5286 15.6844 13.0492 15.9797C13.4573 16.35 13.8032 17.0531 13.8032 18.1547C13.8032 19.7344 13.7899 21.6891 13.7899 22.0734C13.7899 22.3781 13.994 22.7484 14.5573 22.6406C18.9927 21.0844 22 16.6359 22 11.4375C22 4.93594 17.0101 0 10.8581 0ZM4.31129 16.1672C4.25363 16.2141 4.26694 16.3219 4.34234 16.4109C4.41331 16.4859 4.51532 16.5188 4.57298 16.4578C4.63064 16.4109 4.61734 16.3031 4.54194 16.2141C4.47097 16.1391 4.36895 16.1062 4.31129 16.1672ZM3.83226 15.7875C3.80121 15.8484 3.84556 15.9234 3.93427 15.9703C4.00524 16.0172 4.09395 16.0031 4.125 15.9375C4.15605 15.8766 4.11169 15.8016 4.02298 15.7547C3.93427 15.7266 3.86331 15.7406 3.83226 15.7875ZM5.26935 17.4562C5.19839 17.5172 5.225 17.6578 5.32702 17.7469C5.42903 17.8547 5.55766 17.8687 5.61532 17.7938C5.67298 17.7328 5.64637 17.5922 5.55766 17.5031C5.46008 17.3953 5.32702 17.3813 5.26935 17.4562ZM4.76371 16.7672C4.69274 16.8141 4.69274 16.9359 4.76371 17.0438C4.83468 17.1516 4.95444 17.1984 5.0121 17.1516C5.08306 17.0906 5.08306 16.9688 5.0121 16.8609C4.95 16.7531 4.83468 16.7063 4.76371 16.7672Z"
      fill="currentColor"/>
  </svg>
);

export default wrap(IconGithub);
