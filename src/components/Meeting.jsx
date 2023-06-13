import { useFormik } from "formik";
import { useMutation } from "react-query";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import robot from "../assets/robot.webp";
import "../styles/meeting.scss";
import { Parallax } from "react-scroll-parallax";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Please Enter Your First Name")
    .matches(
      /^[a-zA-Z ]+$/,
      "First Name should contain only letters and spaces"
    ),
  lastName: Yup.string()
    .required("Please Enter Your Last Name")
    .matches(
      /^[a-zA-Z ]+$/,
      "Last Name should contain only letters and spaces"
    ),
  companyName: Yup.string().required("Please Enter Your Company Name"),
  businessPhone: Yup.string()
    .required("Please Enter Your Business Number")
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      "Business Phone Number should contain only 10 digits and can have an optional international code"
    ),
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  message: Yup.string(),
});

const sendEmail = async ({
  firstName,
  lastName,
  companyName,
  businessPhone,
  email,
  message,
}) => {
  try {
    const { data } = await axios.post(
      "https://golden-hornet.onrender.com/api/appointment",
      {
        firstName,
        lastName,
        companyName,
        businessPhone,
        email,
        message,
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Meeting = () => {
  const { getFieldProps, errors, touched, handleSubmit, resetForm } = useFormik(
    {
      initialValues: {
        firstName: "",
        lastName: "",
        companyName: "",
        businessPhone: "",
        email: "",
        message: "",
      },
      validationSchema,
      async onSubmit(values) {
        await mutate(values);
        resetForm();
      },
    }
  );

  const { mutate, isLoading } = useMutation(sendEmail, {
    onSuccess: () => {
      toast.success(
        "Your request was sent successfully wait for our confirmation message soon",
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    },
    onError: () => {
      toast.error("Sorry try again later", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });
  return (
    <section
      className="appointment flex justify-center items-start gap-6 min-[290px]:px-6 md:px-0 md:mx-6 py-12 overflow-hidden min-[290px]:flex-wrap md:flex-nowrap"
      id="appointment"
    >
      <div className="left">
        <h1 className="text-4xl dark:text-white">Schedule a meeting</h1>
        <p className="text-xl dark:text-white">
          You can schedule a meeting with us to make your dreams come true and
          grow your business with modern, powerful, and creative software
          applications.
        </p>
        <Parallax
          translateX={["-100px", "100px"]}
          className="md:mt-[10rem] tooltip tooltip-open tooltip-right tooltip-info desktop-robot"
          data-tip="hey! You can schedule a meeting by just filling in the form."
        >
          <img
            src={robot}
            alt="robot"
            width={100}
            height={100}
            loading="lazy"
          />
        </Parallax>
      </div>
      <div className="w-full right">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start gap-2"
        >
          <label htmlFor="firstName" className="dark:text-white">
            First Name: *
          </label>
          <input
            type="text"
            id="firstName"
            {...getFieldProps("firstName")}
            autoComplete="none"
          />
          {errors.firstName && touched.firstName && (
            <div className="text-red-600 dark:text-white">
              {errors.firstName}
            </div>
          )}

          <label htmlFor="lastName" className="dark:text-white">
            Last Name: *
          </label>
          <input
            type="text"
            id="lastName"
            {...getFieldProps("lastName")}
            autoComplete="none"
          />
          {errors.lastName && touched.lastName && (
            <div className="text-red-600 dark:text-white">
              {errors.lastName}
            </div>
          )}

          <label htmlFor="companyName" className="dark:text-white">
            Company Name: *
          </label>
          <input
            type="text"
            id="companyName"
            {...getFieldProps("companyName")}
            autoComplete="none"
          />
          {errors.companyName && touched.companyName && (
            <div className="text-red-600 dark:text-white">
              {errors.companyName}
            </div>
          )}

          <label htmlFor="businessPhone" className="dark:text-white">
            Business Phone: *
          </label>
          <input
            type="tel"
            id="businessPhone"
            {...getFieldProps("businessPhone")}
            autoComplete="none"
          />
          {errors.businessPhone && touched.businessPhone && (
            <div className="text-red-600 dark:text-white">
              {errors.businessPhone}
            </div>
          )}

          <label htmlFor="email" className="dark:text-white">
            Email: *
          </label>
          <input
            type="email"
            id="email"
            {...getFieldProps("email")}
            autoComplete="none"
          />
          {errors.email && touched.email && (
            <div className="text-red-600 dark:text-white">{errors.email}</div>
          )}

          <label htmlFor="message" className="dark:text-white">
            Message:
          </label>
          <textarea
            rows={6}
            id="message"
            {...getFieldProps("message")}
            autoComplete="none"
          />
          {errors.message && touched.message && (
            <div className="text-red-600 dark:text-white">{errors.message}</div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#0f75bd] text-white rounded-sm py-2 pl-2 pr-12"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Meeting;
