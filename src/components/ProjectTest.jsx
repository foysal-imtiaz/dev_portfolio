import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectTest() {
  return (
    <div>
      {/* 2nd copy */}
      <div className="relative pt-2 pl-4 pr-4 pb-2 mb-6 shadow-md dark:shadow-lg max-w-6xl mx-auto min-h-fit overflow-hidden group">
        {/* Main content */}
        <div className="relative z-10 w-full xl:max-w-3xl xl:pr-[330px]">
          {/* Header with title only (year removed) */}
          <div className="mb-4">
            <h1 className="text-neutral-800 font-semibold dark:text-neutral-200">
              LyricsLingua
            </h1>
          </div>

          {/* Technology icons */}
          <div className="flex items-center space-x-3 mb-4">
            {/* Vue.js icon */}
            <div className="w-7 h-7 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-green-600"
                fill="currentColor"
              >
                <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
              </svg>
            </div>

            {/* TypeScript icon */}
            <div className="w-7 h-7  rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
              >
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
            </div>

            {/* Tailwind icon */}
            <div className="w-7 h-7  rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-cyan-600"
                fill="currentColor"
              >
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
            </div>

            {/* Stripe icon */}
            <div className="w-7 h-7 bg rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-purple-600"
                fill="currentColor"
              >
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
              </svg>
            </div>

            {/* Node.js icon */}
            <div className="w-7 h-7 b rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-green-700"
                fill="currentColor"
              >
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
              </svg>
            </div>

            {/* R icon */}
            <div className="w-7 h-7  rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-base">R</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed">
              A web application for translating song lyrics using AI. This
              project involved learning new technologies like Nuxt, Stripe, and
              OpenAI integration. I learnt a lot of new things such as how to
              use Stripe for payments, Resend for email sending.ew things such
              as how to use Stripe for payments, Resend for email sending.
            </p>
          </div>

          {/* Buttons as links */}
          <div className="flex items-center space-x-3 mt-3 mb-1">
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
            >
              <FaGithub className="w-4 h-4" />
              <span className="font-medium">
                <a href="#" target="_blank">
                  Code
                </a>
              </span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
            >
              <FiExternalLink className="w-4 h-4" />
              <span className="font-medium">
                <a href="" target="_blank">
                  Live
                </a>
              </span>
            </a>
          </div>
        </div>

        {/* Preview image positioned exactly as requested - hidden on smaller screens, shown on lg+ */}
        <div className="absolute -bottom-8 -right-[130px] hidden xl:flex">
          <img
            src="https://uideck.com/_next/image?url=https%3A%2F%2Fapi.uideck.com%2Fpublic%2Fimages%2Ffusion.jpg&w=3840&q=75"
            alt="LyricsLingua Preview"
            className="border-2 rounded-lg w-[420px] h-auto shadow-lg 
  transition-transform duration-300 ease-out 
  group-hover:transform group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-3 
  group-hover:shadow-[-10px_-10px_20px_-5px_rgba(0,0,0,0.15)] 
 dark:group-hover:shadow-[-12px_-12px_30px_-5px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectTest;
