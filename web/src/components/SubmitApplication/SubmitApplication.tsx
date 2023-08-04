import { Constants } from '../../../src/utils/Constants'

const SubmitApplication = () => {
  return (
    <a
      href={Constants.APPLICATION_URL}
      target="_blank"
      rel="noreferrer"
      className="my-5 block w-full bg-carminePink py-4 text-center font-wide uppercase text-white no-underline hover:bg-sunshade sm:py-5 sm:text-xl"
    >
      Submit an Application
    </a>
  )
}

export default SubmitApplication
