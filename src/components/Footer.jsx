import logo from "../assets/icon-512x512.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-10 bg-[#0f74bd] text-primary-content">
      <div>
        <img src={logo} alt="logo" width={100} height={100} loading="lazy" />
        <p className="font-bold">Golden Hornet.</p>
        <p>Copyright &copy; {currentYear} - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100090277936175"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/goldenhornet"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn account"
          >
            <svg
              width={24}
              height={24}
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
