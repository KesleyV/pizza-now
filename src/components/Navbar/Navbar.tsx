import IconButton from "../IconButton/IconButton";
import React from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  let navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  const location = useLocation();
 
  const currentUrl = location.pathname;

  return (
    <div className="left-side-menu">
      <IconButton
        selected={currentUrl === "/" ? true : false}
        onClick={() => routeChange("/")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <g clip-path="url(#clip0_2_7)">
              <path
                d="M39.375 9.375C37.2938 8.71875 35.0062 8.4375 32.8125 8.4375C29.1562 8.4375 25.2188 9.1875 22.5 11.25C19.7812 9.1875 15.8438 8.4375 12.1875 8.4375C8.53125 8.4375 4.59375 9.1875 1.875 11.25L1.875 38.7188C1.875 39.1875 2.34375 39.6563 2.8125 39.6563C3 39.6563 3.09375 39.5625 3.28125 39.5625C5.8125 38.3438 9.46875 37.5 12.1875 37.5C15.8438 37.5 19.7813 38.25 22.5 40.3125C25.0313 38.7188 29.625 37.5 32.8125 37.5C35.9063 37.5 39.0938 38.0625 41.7188 39.4688C41.9063 39.5625 42 39.5625 42.1875 39.5625C42.6563 39.5625 43.125 39.0938 43.125 38.625L43.125 11.25C42 10.4063 40.7812 9.84375 39.375 9.375ZM39.375 34.6875C37.3125 34.0313 35.0625 33.75 32.8125 33.75C29.625 33.75 25.0313 34.9688 22.5 36.5625L22.5 15C25.0312 13.4063 29.625 12.1875 32.8125 12.1875C35.0625 12.1875 37.3125 12.4688 39.375 13.125L39.375 34.6875Z"
                fill="white"
              />
              <path
                d="M32.8125 19.6875C34.4625 19.6875 36.0562 19.8563 37.5 20.175V17.325C36.0188 17.0437 34.425 16.875 32.8125 16.875C29.625 16.875 26.7375 17.4187 24.375 18.4312V21.5437C26.4938 20.3437 29.4375 19.6875 32.8125 19.6875Z"
                fill="white"
              />
              <path
                d="M24.375 23.4187V26.5312C26.4938 25.3312 29.4375 24.675 32.8125 24.675C34.4625 24.675 36.0562 24.8437 37.5 25.1625V22.3125C36.0188 22.0312 34.425 21.8625 32.8125 21.8625C29.625 21.8625 26.7375 22.425 24.375 23.4187Z"
                fill="white"
              />
              <path
                d="M32.8125 26.8687C29.625 26.8687 26.7375 27.4125 24.375 28.425V31.5375C26.4938 30.3375 29.4375 29.6812 32.8125 29.6812C34.4625 29.6812 36.0562 29.85 37.5 30.1687V27.3187C36.0188 27.0187 34.425 26.8687 32.8125 26.8687Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_7">
                <rect width="45" height="45" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
        />
        <IconButton
        selected={currentUrl === "/profile" ? true : false}
        onClick={() => routeChange("/profile")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_2_17)">
              <path
                d="M20 20C23.6834 20 26.6667 17.0167 26.6667 13.3333C26.6667 9.64999 23.6834 6.66666 20 6.66666C16.3167 6.66666 13.3334 9.64999 13.3334 13.3333C13.3334 17.0167 16.3167 20 20 20ZM20 23.3333C15.55 23.3333 6.66669 25.5667 6.66669 30L6.66669 33.3333H33.3334V30C33.3334 25.5667 24.45 23.3333 20 23.3333Z"
                fill="#B4BCCF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_17">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
      />
      <IconButton
      selected={currentUrl === "/wallet" ? true : false}
        onClick={() => routeChange("/wallet")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_2_20)">
              <path
                d="M35 30V31.6667C35 33.5 33.5 35 31.6667 35H8.33333C6.48333 35 5 33.5 5 31.6667L5 8.33333C5 6.5 6.48333 5 8.33333 5L31.6667 5C33.5 5 35 6.5 35 8.33333V10H20C18.15 10 16.6667 11.5 16.6667 13.3333L16.6667 26.6667C16.6667 28.5 18.15 30 20 30H35ZM20 26.6667H36.6667V13.3333L20 13.3333L20 26.6667ZM26.6667 22.5C25.2833 22.5 24.1667 21.3833 24.1667 20C24.1667 18.6167 25.2833 17.5 26.6667 17.5C28.05 17.5 29.1667 18.6167 29.1667 20C29.1667 21.3833 28.05 22.5 26.6667 22.5Z"
                fill="#B4BCCF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_20">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
      />
      <IconButton
      selected={currentUrl === "/settings" ? true : false}
        onClick={() => routeChange("/settings")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_2_23)">
              <path
                d="M31.9 21.5667C31.9666 21.0667 32 20.55 32 20C32 19.4667 31.9666 18.9333 31.8833 18.4333L35.2666 15.8C35.5666 15.5667 35.65 15.1167 35.4666 14.7833L32.2666 9.25C32.0666 8.88333 31.65 8.76667 31.2833 8.88333L27.3 10.4833C26.4666 9.85 25.5833 9.31667 24.6 8.91667L24 4.68333C23.9333 4.28333 23.6 4 23.2 4L16.8 4C16.4 4 16.0833 4.28333 16.0166 4.68333L15.4166 8.91667C14.4333 9.31667 13.5333 9.86667 12.7166 10.4833L8.73331 8.88333C8.36665 8.75 7.94998 8.88333 7.74998 9.25L4.56665 14.7833C4.36665 15.1333 4.43331 15.5667 4.76665 15.8L8.14998 18.4333C8.06665 18.9333 7.99998 19.4833 7.99998 20C7.99998 20.5167 8.03331 21.0667 8.11665 21.5667L4.73331 24.2C4.43331 24.4333 4.34998 24.8833 4.53331 25.2167L7.73331 30.75C7.93331 31.1167 8.34998 31.2333 8.71665 31.1167L12.7 29.5167C13.5333 30.15 14.4166 30.6833 15.4 31.0833L16 35.3167C16.0833 35.7167 16.4 36 16.8 36H23.2C23.6 36 23.9333 35.7167 23.9833 35.3167L24.5833 31.0833C25.5666 30.6833 26.4666 30.15 27.2833 29.5167L31.2666 31.1167C31.6333 31.25 32.05 31.1167 32.25 30.75L35.45 25.2167C35.65 24.85 35.5666 24.4333 35.25 24.2L31.9 21.5667ZM20 26C16.7 26 14 23.3 14 20C14 16.7 16.7 14 20 14C23.3 14 26 16.7 26 20C26 23.3 23.3 26 20 26Z"
                fill="#B4BCCF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_23">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
      />
      <IconButton
      selected={currentUrl === "/chat" ? true : false}
        onClick={() => routeChange("/chat")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_2_33)">
              <path
                d="M33.3333 3.33333L6.66665 3.33333C4.83331 3.33333 3.33331 4.83333 3.33331 6.66666L3.33331 36.6667L9.99998 30L33.3333 30C35.1666 30 36.6666 28.5 36.6666 26.6667L36.6666 6.66666C36.6666 4.83333 35.1666 3.33333 33.3333 3.33333Z"
                fill="#B4BCCF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_33">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
      />
    </div>
  );
};

export default Navbar;
