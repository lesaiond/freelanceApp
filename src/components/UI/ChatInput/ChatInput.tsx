import React, { useState } from "react";
import { StyledChatInput } from "./ChatInput.style";
import { Button } from "../Button/Button";

const ChatInput = () => {
  const [value, setValue] = useState("")

  const handleChange = ({data}) => {
    console.log(data.target.value);
    
  }
  return (
    <StyledChatInput>
      <div className="typesMessage">
        <textarea placeholder="Write message" onChange={(e) => handleChange(e)} name="" id="" cols={30} rows={2}></textarea>
        <label htmlFor="chooseAnyFile">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 3.471C1.75 3.05679 1.41421 2.721 1 2.721C0.585788 2.721 0.250001 3.05679 0.250001 3.471H1.75ZM1 14.353L1.75 14.3539V14.353H1ZM1.4804 15.5168L2.01137 14.9871L1.4804 15.5168ZM2.643 16L2.64209 16.75H2.643V16ZM15.357 16V16.75L15.3579 16.75L15.357 16ZM16.5196 15.5168L15.9886 14.9871V14.9871L16.5196 15.5168ZM17 14.353H16.25L16.25 14.3539L17 14.353ZM17 5.118L16.25 5.11709V5.118H17ZM16.5196 3.95422L15.9886 4.48391V4.48391L16.5196 3.95422ZM15.357 3.471L15.3579 2.721H15.357V3.471ZM9.536 2.721C9.12179 2.721 8.786 3.05679 8.786 3.471C8.786 3.88521 9.12179 4.221 9.536 4.221V2.721ZM0.250001 3.471C0.250001 3.88521 0.585788 4.221 1 4.221C1.41421 4.221 1.75 3.88521 1.75 3.471H0.250001ZM1 2.647H1.75L1.75 2.64609L1 2.647ZM1.4804 1.48322L2.01137 2.01291V2.01291L1.4804 1.48322ZM2.643 1V0.249999L2.64209 0.250001L2.643 1ZM7.893 1L7.89391 0.25H7.893V1ZM9.05561 1.48322L8.52463 2.01291L9.05561 1.48322ZM9.536 2.647L8.786 2.64609V2.647H9.536ZM8.786 3.471C8.786 3.88521 9.12179 4.221 9.536 4.221C9.95021 4.221 10.286 3.88521 10.286 3.471H8.786ZM1 2.721C0.585788 2.721 0.250001 3.05679 0.250001 3.471C0.250001 3.88521 0.585788 4.221 1 4.221V2.721ZM9.536 4.221C9.95022 4.221 10.286 3.88521 10.286 3.471C10.286 3.05679 9.95022 2.721 9.536 2.721V4.221ZM0.250001 3.471V14.353H1.75V3.471H0.250001ZM0.250002 14.3521C0.249229 14.9873 0.500818 15.5968 0.949422 16.0465L2.01137 14.9871C1.84373 14.819 1.74971 14.5913 1.75 14.3539L0.250002 14.3521ZM0.949422 16.0465C1.39802 16.4962 2.0069 16.7492 2.64209 16.75L2.64391 15.25C2.40654 15.2497 2.17901 15.1551 2.01137 14.9871L0.949422 16.0465ZM2.643 16.75H15.357V15.25H2.643V16.75ZM15.3579 16.75C15.9931 16.7492 16.602 16.4962 17.0506 16.0465L15.9886 14.9871C15.821 15.1551 15.5935 15.2497 15.3561 15.25L15.3579 16.75ZM17.0506 16.0465C17.4992 15.5968 17.7508 14.9873 17.75 14.3521L16.25 14.3539C16.2503 14.5913 16.1563 14.819 15.9886 14.9871L17.0506 16.0465ZM17.75 14.353V5.118H16.25V14.353H17.75ZM17.75 5.11891C17.7508 4.48372 17.4992 3.87423 17.0506 3.42454L15.9886 4.48391C16.1563 4.65196 16.2503 4.87972 16.25 5.11709L17.75 5.11891ZM17.0506 3.42454C16.602 2.97484 15.9931 2.72177 15.3579 2.721L15.3561 4.221C15.5935 4.22129 15.821 4.31586 15.9886 4.48391L17.0506 3.42454ZM15.357 2.721H9.536V4.221H15.357V2.721ZM1.75 3.471V2.647H0.250001V3.471H1.75ZM1.75 2.64609C1.74971 2.40872 1.84373 2.18096 2.01137 2.01291L0.949422 0.953538C0.500818 1.40323 0.249229 2.01272 0.250002 2.64791L1.75 2.64609ZM2.01137 2.01291C2.17901 1.84486 2.40654 1.75029 2.64391 1.75L2.64209 0.250001C2.0069 0.250772 1.39803 0.503843 0.949421 0.953538L2.01137 2.01291ZM2.643 1.75H7.893V0.25H2.643V1.75ZM7.89209 1.75C8.12946 1.75029 8.35699 1.84486 8.52463 2.01291L9.58658 0.953538C9.13798 0.503843 8.52911 0.250772 7.89391 0.250001L7.89209 1.75ZM8.52463 2.01291C8.69227 2.18096 8.78629 2.40872 8.786 2.64609L10.286 2.64791C10.2868 2.01272 10.0352 1.40323 9.58658 0.953538L8.52463 2.01291ZM8.786 2.647V3.471H10.286V2.647H8.786ZM1 4.221H9.536V2.721H1V4.221Z"
              fill="#282C35"
            />
          </svg>
          <input type="file" id="chooseAnyFile" className=" input" />
        </label>
        <label htmlFor="chooseImg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6921 1H5.30807C4.15914 1.00635 3.0598 1.46885 2.25189 2.28576C1.44398 3.10268 0.993684 4.20708 1.00007 5.356V10.644C1.00007 10.8134 1.00976 10.9827 1.02907 11.151C1.27126 13.3343 3.11136 14.9895 5.30807 15H10.6921C11.841 14.9937 12.9403 14.5311 13.7482 13.7142C14.5562 12.8973 15.0064 11.7929 15.0001 10.644V5.356C15.0064 4.20708 14.5562 3.10268 13.7482 2.28576C12.9403 1.46885 11.841 1.00635 10.6921 1Z"
              stroke="#282C35"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.05306 4.54606C5.05306 4.82607 4.82607 5.05306 4.54606 5.05306C4.26605 5.05306 4.03906 4.82607 4.03906 4.54606C4.03906 4.26605 4.26605 4.03906 4.54606 4.03906C4.82607 4.03906 5.05306 4.26605 5.05306 4.54606Z"
              stroke="#282C35"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.0293 11.151C1.56589 10.67 2.06439 10.1481 2.5203 9.59004C3.19496 8.6773 4.39057 8.31853 5.4563 8.70904C7.9803 9.50904 10.2333 12.448 12.3943 10.92C13.1879 10.3144 13.8022 9.5046 14.1713 8.57704C14.3885 8.06752 14.6669 7.58632 15.0003 7.14404"
              stroke="#282C35"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="file" id="chooseImg" className=" input" />
        </label>
      </div>
      <Button buttonText="Send" />
    </StyledChatInput>
  );
};

export default ChatInput;