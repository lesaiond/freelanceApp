import React from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledRegistrationPage2 } from "./RegistrationPage2.style";
import { Button } from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  education: string;
  proffesi: string;
  subCategory: string;
  field: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  contactNumber: yup.string().required("Contact Number is required"),
  education: yup.string().required("Education is required"),
  proffesi: yup.string().required("Current Service providing is required"),
  subCategory: yup.string().required("Please choose a Sub Category"),
  field: yup.string().required("Please choose a Field"),
});

function RegistrationPage2() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    navigate("/login");
    const registrationDataPart1 = JSON.parse(localStorage.getItem('registrationData') || '{}');
    const combinedData = { ...registrationDataPart1, ...data };
    console.log(combinedData);
    localStorage.setItem("registrationData", JSON.stringify(combinedData))
    
  };
  return (
    <StyledRegistrationPage2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="leftPart">
          <label
            htmlFor="firstName"
            style={{ borderColor: errors.firstName ? "red" : "green" }}
          >
            <span className="grayText">First Name</span>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className={errors.firstName ? "red" : "green"}
                  {...field}
                />
              )}
            />
            <p style={{ color: "red" }}>{errors.firstName?.message}</p>
          </label>

          <label htmlFor="lastName">
            <span className="grayText">Last Name</span>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className={errors.firstName ? "red" : "green"}
                  {...field}
                />
              )}
            />
            <p>{errors.lastName?.message}</p>
          </label>

          <label htmlFor="field">
            <Controller
              name="field"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} className={errors.field ? "red" : "green"}>
                  <option value="">Choose your Field</option>
                  <option value="Computer Sciences">Computer Sciences</option>
                  <option value="Computer Sciences">Computer Sciences</option>
                  <option value="Computer Sciences">Computer Sciences</option>
                </select>
              )}
            />
            <p>{errors.field?.message}</p>
          </label>

          <label htmlFor="contactNumber">
            <span className="grayText">Contact Number</span>
            <Controller
              name="contactNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className={errors.firstName ? "red" : "green"}
                  {...field}
                />
              )}
            />
            <p>{errors.contactNumber?.message}</p>
          </label>

          <label htmlFor="education">
            <span className="grayText">Education</span>
            <Controller
              name="education"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className={errors.firstName ? "red" : "green"}
                  {...field}
                />
              )}
            />
            <p>{errors.education?.message}</p>
          </label>

          <label htmlFor="proffesi">
            <span className="grayText">Current Service providing</span>
            <Controller
              name="proffesi"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className={errors.firstName ? "red" : "green"}
                  {...field}
                />
              )}
            />
            <p>{errors.proffesi?.message}</p>
          </label>

          <label htmlFor="subCategory">
            <Controller
              name="subCategory"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} className={errors.field ? "red" : "green"}>
                  <option value="">Choose your Sub Category</option>
                  <option value="Mobile UI Designing">
                    Mobile UI Designing
                  </option>
                  <option value="Mobile UI Designing">
                    Mobile UI Designing
                  </option>
                  <option value="Mobile UI Designing">
                    Mobile UI Designing
                  </option>
                  <option value="Mobile UI Designing">
                    Mobile UI Designing
                  </option>
                </select>
              )}
            />
            <p>{errors.field?.message}</p>
          </label>
        </div>
        <div className="rightPart">
          <div className="files">
            <label htmlFor="circle" className="circle">
              <span className="grayText">Uplaod CV Resume</span>
              <input type="file" id="circle" />
            </label>
            <div className="row">
              <label htmlFor="resume">
                <span className="grayText">Uplaod CV Resume</span>
                <input type="file" id="resume" />
              </label>
              <label htmlFor="certifcate">
                <span className="grayText">Uplaod School Certifcates</span>
                <input type="file" id="certifcate" />
              </label>
              <label htmlFor="diplom">
                <span className="grayText">Uplaod any Diploma</span>
                <input type="file" id="diplom" />
              </label>
            </div>
          </div>
          <Button buttonText="Sign Up" />
        </div>
      </form>
    </StyledRegistrationPage2>
  );
}

export default RegistrationPage2;
