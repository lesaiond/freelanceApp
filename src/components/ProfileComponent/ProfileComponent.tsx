import React, { useEffect } from "react";
import { StyledProfileComponent } from "./ProfileComponent.style";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("registrationData"));

  useEffect(() => {}, []);

  const handleClickLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <StyledProfileComponent>
      <div className="mainInfo">
        <div onClick={handleClickLogOut} className="link remove">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
          </svg>
        </div>
        <img
          src="/public/img/avatar/Ellipse 92.png"
          alt=""
          className="avatar"
        />
        <span className="username">{userInfo.username}</span>
        <div className="space-between">
          <div>
            <svg
              width="20"
              height="22"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_305_512)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8898 11.3335H9.11009C7.40902 11.4179 5.90195 12.457 5.21809 14.0168C4.39326 15.6362 6.03942 17.1668 7.95392 17.1668H16.0459C17.9616 17.1668 19.6078 15.6362 18.7818 14.0168C18.0979 12.457 16.5908 11.4179 14.8898 11.3335Z"
                  fill="#282C35"
                  stroke="#282C35"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5 4.3335C15.5 6.26649 13.933 7.8335 12 7.8335C10.067 7.8335 8.5 6.26649 8.5 4.3335C8.5 2.4005 10.067 0.833496 12 0.833496C12.9283 0.833496 13.8185 1.20224 14.4749 1.85862C15.1313 2.515 15.5 3.40524 15.5 4.3335Z"
                  fill="#282C35"
                  stroke="#282C35"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_305_512"
                  x="0.249512"
                  y="0.0834961"
                  width="23.5015"
                  height="25.8335"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_305_512"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_305_512"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <span className="gray">Member since</span>
          </div>
          <span className="gray">Sep 2021</span>
        </div>
        <div className="space-between">
          <div>
            <svg
              className="gray"
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.00879 0.25C7.82882 0.250018 8.64101 0.409653 9.40004 0.72C10.5396 1.18641 11.5156 1.97974 12.205 3C12.8899 4.01109 13.2568 5.20381 13.2588 6.425C13.2588 8.0625 12.7375 9 11.4275 10.7913L9.61254 13.625L7.00879 17.75L4.40504 13.6337L2.59004 10.795C1.28004 9 0.758789 8.06625 0.758789 6.42875C0.760003 5.20629 1.12699 4.01215 1.81254 3C2.5025 1.98113 3.47845 1.18915 4.61754 0.72375C5.37632 0.412118 6.18851 0.251208 7.00879 0.25ZM7.00879 8.48375C7.74431 8.48375 8.42396 8.09135 8.79172 7.45437C9.15948 6.8174 9.15948 6.0326 8.79172 5.39563C8.42396 4.75865 7.74431 4.36625 7.00879 4.36625M7.00879 8.49125C6.2614 8.50967 5.56276 8.12147 5.18365 7.47711C4.80454 6.83275 4.80454 6.0335 5.18365 5.38914C5.56276 4.74478 6.2614 4.35658 7.00879 4.375"
                fill="#686868"
              />
              <path
                d="M7.00879 0.2C6.98118 0.199999 6.95879 0.222385 6.95879 0.249999C6.95879 0.277613 6.98117 0.299999 7.00879 0.3L7.00879 0.2ZM9.40004 0.72L9.41898 0.673726L9.41896 0.673719L9.40004 0.72ZM12.205 3L12.1636 3.02799L12.1636 3.02804L12.205 3ZM13.2588 6.425H13.3088V6.42492L13.2588 6.425ZM11.4275 10.7913L11.3871 10.7617L11.3854 10.7643L11.4275 10.7913ZM9.61254 13.625L9.57043 13.598L9.57026 13.5983L9.61254 13.625ZM7.00879 17.75L6.96653 17.7767C6.9757 17.7912 6.99166 17.8 7.00881 17.8C7.02596 17.8 7.04192 17.7912 7.05107 17.7767L7.00879 17.75ZM4.40504 13.6337L4.4473 13.607L4.44716 13.6068L4.40504 13.6337ZM2.59004 10.795L2.63224 10.768L2.63043 10.7655L2.59004 10.795ZM0.758789 6.42875L0.708789 6.4287V6.42875H0.758789ZM1.81254 3L1.85394 3.02804L1.85394 3.02804L1.81254 3ZM4.61754 0.72375L4.63645 0.770036L4.63653 0.770001L4.61754 0.72375ZM7.00886 0.3C7.03648 0.299959 7.05883 0.277541 7.05879 0.249926C7.05875 0.222312 7.03633 0.199959 7.00872 0.2L7.00886 0.3ZM7.00879 8.43375C6.98117 8.43375 6.95879 8.45613 6.95879 8.48375C6.95879 8.51136 6.98117 8.53375 7.00879 8.53375V8.43375ZM7.00879 4.31625C6.98117 4.31625 6.95879 4.33864 6.95879 4.36625C6.95879 4.39387 6.98117 4.41625 7.00879 4.41625V4.31625ZM7.01002 8.54123C7.03763 8.54056 7.05945 8.51762 7.05877 8.49002C7.05809 8.46241 7.03516 8.44059 7.00756 8.44127L7.01002 8.54123ZM5.18365 7.47711L5.22674 7.45176L5.18365 7.47711ZM5.18365 5.38914L5.14055 5.36379L5.18365 5.38914ZM7.00756 4.42498C7.03516 4.42567 7.05809 4.40384 7.05877 4.37623C7.05945 4.34863 7.03763 4.3257 7.01002 4.32502L7.00756 4.42498ZM7.00879 0.3C7.82233 0.300017 8.62809 0.458389 9.38112 0.766281L9.41896 0.673719C8.65392 0.360916 7.83531 0.200018 7.00879 0.2L7.00879 0.3ZM9.3811 0.766274C10.5116 1.22895 11.4797 2.01592 12.1636 3.02799L12.2465 2.97201C11.5515 1.94357 10.5677 1.14388 9.41898 0.673726L9.3811 0.766274ZM12.1636 3.02804C12.8429 4.03088 13.2068 5.21386 13.2088 6.42508L13.3088 6.42492C13.3068 5.19377 12.9369 3.99131 12.2464 2.97196L12.1636 3.02804ZM13.2088 6.425C13.2088 7.23754 13.0796 7.87428 12.7887 8.5302C12.497 9.18778 12.0421 9.86617 11.3872 10.7617L11.4679 10.8208C12.1229 9.92508 12.5837 9.2391 12.8801 8.57074C13.1773 7.90072 13.3088 7.24996 13.3088 6.425H13.2088ZM11.3854 10.7643L9.57044 13.598L9.65464 13.652L11.4696 10.8182L11.3854 10.7643ZM9.57026 13.5983L6.96651 17.7233L7.05107 17.7767L9.65482 13.6517L9.57026 13.5983ZM7.05104 17.7233L4.44729 13.607L4.36278 13.6605L6.96653 17.7767L7.05104 17.7233ZM4.44716 13.6068L2.63216 10.7681L2.54791 10.8219L4.36291 13.6607L4.44716 13.6068ZM2.63043 10.7655C1.97545 9.86805 1.52054 9.18966 1.22886 8.53253C0.937934 7.87708 0.808789 7.24128 0.808789 6.42875H0.708789C0.708789 7.25372 0.84027 7.90354 1.13746 8.5731C1.43391 9.24096 1.89463 9.92695 2.54965 10.8245L2.63043 10.7655ZM0.808789 6.4288C0.809993 5.21631 1.17399 4.03193 1.85394 3.02804L1.77114 2.97196C1.08 3.99237 0.710013 5.19626 0.708789 6.4287L0.808789 6.4288ZM1.85394 3.02804C2.53836 2.01734 3.50649 1.23171 4.63645 0.770036L4.59863 0.677464C3.4504 1.1466 2.46663 1.94493 1.77114 2.97196L1.85394 3.02804ZM4.63653 0.770001C5.38931 0.460835 6.19508 0.301198 7.00886 0.3L7.00872 0.2C6.18195 0.201217 5.36332 0.363401 4.59854 0.677499L4.63653 0.770001ZM7.00879 8.53375C7.76217 8.53375 8.45833 8.13182 8.83502 7.47937L8.74842 7.42937C8.38959 8.05088 7.72645 8.43375 7.00879 8.43375V8.53375ZM8.83502 7.47937C9.21171 6.82693 9.21171 6.02308 8.83502 5.37063L8.74842 5.42063C9.10725 6.04213 9.10725 6.80787 8.74842 7.42937L8.83502 7.47937ZM8.83502 5.37063C8.45833 4.71818 7.76217 4.31625 7.00879 4.31625V4.41625C7.72645 4.41625 8.38959 4.79912 8.74842 5.42063L8.83502 5.37063ZM7.00756 8.44127C6.27832 8.45924 5.59665 8.08047 5.22674 7.45176L5.14055 7.50246C5.52888 8.16248 6.24448 8.5601 7.01002 8.54123L7.00756 8.44127ZM5.22674 7.45176C4.85684 6.82304 4.85684 6.04321 5.22674 5.41449L5.14055 5.36379C4.75223 6.0238 4.75223 6.84245 5.14055 7.50246L5.22674 7.45176ZM5.22674 5.41449C5.59665 4.78578 6.27832 4.40701 7.00756 4.42498L7.01002 4.32502C6.24448 4.30615 5.52888 4.70377 5.14055 5.36379L5.22674 5.41449Z"
                fill="#686868"
              />
            </svg>
            <span className="gray">From</span>
          </div>
          <span className="gray">Pakistan</span>
        </div>
      </div>
      <div className="userInfo">
        <svg onClick={() => navigate("/profile/edit")}
          className="edit"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
        </svg>
        <div className="grayText">From</div>
        <span className="text">{userInfo.firstName}</span>
        <div className="grayText">Last Name</div>
        <span className="text">{userInfo.lastName}</span>
        <div className="grayText">Email</div>
        <span className="text">{userInfo.lastName}</span>
        <div className="grayText">Gender</div>
        <span className="text">{userInfo.lastName}</span>
        <div className="grayText">subCategory</div>
        <span className="text">{userInfo.subCategory}</span>
        <div className="grayText">contactNumber</div>
        <span className="text">{userInfo.contactNumber}</span>
        <div className="grayText">Education</div>
        <span className="text">{userInfo.education}</span>
        <div className="grayText">Field</div>
        <span className="text">{userInfo.field}</span>
      </div>
    </StyledProfileComponent>
  );
};

export default ProfileComponent;
