import { useMutation } from "react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/support.scss";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  message: Yup.string().required("Please Enter Your Message"),
});

const sendEmail = async ({ email, message }) => {
  try {
    const { data } = await axios.post(
      "https://golden-hornet.onrender.com/api/support",
      {
        email,
        message,
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Support = () => {
  const { getFieldProps, errors, touched, handleSubmit, resetForm } = useFormik(
    {
      initialValues: {
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
        "Your Message was sent successfully wait for my response soon",
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
      className="flex flex-col items-center justify-center min-h-screen overflow-hidden support"
      id="support"
    >
      <h1 className="min-[290px]:text-4xl md:text-7xl text-center mb-8 dark:text-white">
        Send Us Your Problem
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col min-[290px]:w-[90%] md:w-full"
      >
        <label className="text-2xl dark:text-white" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="min-[290px]:w-full md:w-1/2 py-2 pl-4 outline-none bg-[#f5f9fa] dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-[#f5f9fa] border-2 border-solid border-[#ffcc00]"
          {...getFieldProps("email")}
          autoComplete="none"
        />
        {errors.email && touched.email && (
          <div className="text-red-600 dark:text-white">{errors.email}</div>
        )}
        <label className="mt-6 text-2xl dark:text-white" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          className="min-[290px]:w-full md:w-1/2 h-[200px] py-2 pl-4 outline-none bg-[#f5f9fa] dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-[#f5f9fa] border-2 border-solid border-[#ffcc00]"
          {...getFieldProps("message")}
          autoComplete="none"
        />
        {errors.message && touched.message && (
          <div className="text-red-600 dark:text-white">{errors.message}</div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#0f75bd] text-white rounded-sm py-2 mt-6 min-[290px]:w-full md:w-1/2"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Support;
