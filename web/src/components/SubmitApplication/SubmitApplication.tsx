import { Constants } from '../../../src/utils/Constants'

const SubmitApplication = () => {
  return (
    <a
      href={Constants.APPLICATION_URL}
      target="_blank"
      rel="noreferrer"
      className="my-5 block w-full bg-carminePink py-5 text-center font-wide text-xl uppercase text-white no-underline hover:bg-sunshade"
    >
      Submit an Application
    </a>
  )
}

export default SubmitApplication
