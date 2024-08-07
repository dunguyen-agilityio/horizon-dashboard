import { colors } from '@/themes';

const Moon = ({ isDark }: { isDark: boolean }) => {
  const { white, secondary } = colors;
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_101_12742)">
          <path
            d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z"
            fill={isDark ? white : secondary}
          />
        </g>
        <defs>
          <clipPath id="clip0_101_12742">
            <rect width="18" height="18" fill={isDark ? white : secondary} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Moon;
