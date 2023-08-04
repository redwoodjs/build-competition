import { useEffect, useState } from 'react'

import SubmitApplication from 'src/components/SubmitApplication/SubmitApplication'
import { getCurrentYear } from 'src/utils/DateHelpers'

import { Constants } from '../../utils/Constants'

const HomePage = () => {
  const [time, setTime] = useState('hour-1')

  useEffect(() => {
    // get the current, local time
    const date = new Date()
    const hour = date.getHours()

    if (hour < 8) {
      setTime('hour-1')
    } else if (hour < 10) {
      setTime('hour-2')
    } else if (hour < 12) {
      setTime('hour-3')
    } else if (hour < 14) {
      setTime('hour-4')
    } else if (hour < 16) {
      setTime('hour-5')
    } else if (hour < 18) {
      setTime('hour-6')
    }
  }, [])

  return (
    <>
      <div className={`bg-gradient-to-b ${time}`}>
        {/* video of stars for nighttime */}
        {time === 'hour-5' || time === 'hour-6' ? (
          <video
            className="pointer-events-none absolute inset-0 z-10 w-full mix-blend-screen"
            width="1440"
            height="810"
            controls={false}
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source src="/video/stars.mp4" type="video/mp4" />
          </video>
        ) : (
          <video
            className="pointer-events-none absolute inset-0 z-50 w-full mix-blend-multiply"
            width="1440"
            height="810"
            controls={false}
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source src="/video/birds.mp4" type="video/mp4" />
          </video>
        )}
        <header>
          {/* sky overlay for nighttime */}
          <section className="sky-overlay min-h-[100vh] min-w-[100vw] pt-[70px] text-center">
            <div className="relative mx-auto w-[550px] text-center">
              <img
                src="/images/logo.svg"
                alt="RedwoodJS"
                className="mx-auto mb-[50px]"
              />
              <h1 className="mb-10 font-condensed text-[100px] leading-none md:text-[150px] md:leading-[144px] ">
                Build
                <br />
                Competition
              </h1>
              <h2 className="mb-[70px] font-wide text-[25px] tracking-[-7%] text-[#faf0e1]">
                Get Creative &amp;
                <br />
                Build Something Cool
              </h2>
              <SubmitApplication />
            </div>
          </section>
        </header>
      </div>
      <main className="px-5 md:px-0">
        <section>
          <p>
            Do you have an idea that you&apos;ve been wanting to build with
            Redwood? Now&apos;s your chance!
          </p>
          <p>
            Join the RedwoodJS Build Competition and challenge yourself to build
            something new and creative.
          </p>
          <p>
            Showcase your skills and present your project at the RedwoodJS
            Conference for a chance to win!
          </p>
        </section>
        <section>
          <h3>How it Works</h3>
          <ol>
            <li>
              <a
                href={Constants.APPLICATION_URL}
                target="_blank"
                rel="noreferrer"
              >
                Register for the competition by 11:59pm PT, August 16, 2023.
              </a>{' '}
              This includes a short video (roughly 3 minutes or less),
              introducing yourself, explaining your ideas, how you will use
              RedwoodJS, and anything else you might want us to know.
            </li>
            <li>
              You&apos;ll have until{' '}
              <strong>11:59pm PT September 8, 2023</strong> to build your
              project.
            </li>
            <li>
              Three finalists will be chosen to present their projects at the{' '}
              <a
                href={Constants.CONFERENCE_URL}
                target="_blank"
                rel="noreferrer"
              >
                RedwoodJS Conference
              </a>{' '}
              in Grants Pass, Oregon, September 26- 29th.
            </li>
          </ol>
        </section>
        <section>
          <h3>Prizes</h3>
          <p>We will be awarding over $10k in prizes. Here’s the breakdown:</p>
          <ul>
            <li>1st Place - $7k</li>
            <li>2nd Place - $2k</li>
            <li>3rd Place - $1k</li>
          </ul>
          <p>
            Additionally, <em>all finalists</em> will receive complimentary
            tickets to the conference, as well as, lodging and transportation
            during the event.
          </p>
        </section>
        <section>
          <h3>Evaluation</h3>
          <p>Winners will be selected based on:</p>
          <ol>
            <li>
              Usefulness:
              <ul>
                <li>Solves real-world problems</li>
                <li>Demonstrates innovation in approach and solutions</li>
              </ul>
            </li>

            <li>
              Delightfulness:
              <ul>
                <li>Delivers a fast and efficient user experience</li>
                <li>Showcases a well-thought-out and creative design</li>
                <li>Ensures ease of use and intuitive interaction</li>
                <li>Displays exceptional quality and attention to detail</li>
                <li>
                  Incorporates interesting and unique elements that captivate
                  users
                </li>
              </ul>
            </li>
          </ol>
        </section>
        <section>
          <h3>Rules &amp; Requirements</h3>
          <ul>
            <li>
              Your project must use{' '}
              <a
                href={Constants.REDWOODJS_URL}
                target="_blank"
                rel="noreferrer"
              >
                RedwoodJS
              </a>
              .
            </li>
            <li>Team sizes must be between 1 and 3 members.</li>
            <li>
              Submissions must have a demonstration video or working demo
              included in their README
            </li>
            <li>
              Submissions must be new. Projects started before August 4, 2023
              are not eligible.
            </li>
            <li>
              If you’re under 18, you will need to obtain written permission
              from a parent or legal guardian to enter.
            </li>
            <li>
              You must be able to provide a link to your project on{' '}
              <a href={Constants.GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </li>
            <li>Closed-source code is not permitted.</li>
            <li>
              <a
                href={Constants.APPLICATION_URL}
                target="_blank"
                rel="noreferrer"
              >
                Register
              </a>{' '}
              by <strong>11:59pm PT August 16, 2023</strong>. This includes a
              short video introducing yourself and your ideas.
            </li>
            <li>
              You&apos;ll have until{' '}
              <strong>11:59pm PT September 8, 2023</strong> to build your
              project.{' '}
            </li>
            <li>
              The Redwood team will select three finalists by September 15, 2023
              to present their projects at the{' '}
              <a href={Constants.CONFERENCE_URL}>RedwoodJS Conference</a>.
            </li>
          </ul>
          <SubmitApplication />
        </section>
        <section>
          <h3>Fine Print</h3>
          <ul>
            <li>This is not a pitch for funding.</li>
            <li>
              The RedwoodJS team cannot be held liable for any reason, and
              reserve the right to disqualify any submission for any reason they
              see fit.
            </li>
            <li>
              To revoke submission or ask a question, please contact
              <a href={`mailto:${Constants.EMAIL}`}>{Constants.EMAIL}</a>
            </li>
            <li>
              RedwoodJS reserves the right to make adjustments to the rules in
              case of abuse.
            </li>
            <li>All decisions and rulings are final.</li>
            <li>
              Any taxes or other fees are the responsibility of the winner, and
              will not be paid by us.
            </li>
            <li>RedwoodJS Core Team Members cannot participate.</li>
          </ul>
          <SubmitApplication />
        </section>
        <footer>
          Copyright &copy; {getCurrentYear()}{' '}
          <a
            href={Constants.REDWOODJS_URL}
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline"
          >
            RedwoodJS
          </a>
          . All Rights Reserved.
        </footer>
      </main>
    </>
  )
}

export default HomePage
