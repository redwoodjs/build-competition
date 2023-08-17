import { useEffect, useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

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
    } else {
      setTime('hour-6')
    }

    console.log({ time })
  }, [setTime, time])

  return (
    <>
      <MetaTags
        description="Join the RedwoodJS Build Competition and unleash your creativity! Open to all developers, we'll be giving away over $10k in prizes and a chance to present at the RedwoodJS Conference. Build innovative projects using Redwood, showcase your skills, and win big.!"
        ogUrl="https://build.redwoodjs.com"
        ogContentUrl="https://build.redwoodjs.com/images/og.png"
      />
      <div className={`bg-gradient-to-b ${time}`}>
        {/* video of stars for nighttime */}
        <video
          className="star-vid pointer-events-none absolute inset-0 z-10 w-full mix-blend-screen"
          width="1440"
          height="810"
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/video/stars.mp4" type="video/mp4" />
        </video>
        <video
          className="birds-vid pointer-events-none absolute inset-0 z-50 mt-[25vh] w-full mix-blend-multiply md:mt-0"
          width="1440"
          height="810"
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/video/birds.mp4" type="video/mp4" />
        </video>
        <header>
          {/* sky overlay for nighttime */}
          <section className="sky-overlay min-h-[100vh] min-w-[100vw] pt-[70px] text-center">
            <div className="relative mx-auto w-full px-5 text-center sm:w-[550px]">
              <img
                src="/images/logo.svg"
                alt="RedwoodJS"
                className="mx-auto mb-[50px]"
              />
              <h1 className="mb-10 font-condensed text-[100px] leading-none md:text-[150px] md:leading-[144px]">
                Build
                <br />
                Competition
              </h1>
              <h2 className="mb-[70px] font-wide text-base leading-tight tracking-[-7%] text-[#faf0e1] sm:text-[25px]">
                Get Creative &amp;
                <br />
                Build Something Cool
                <br />
                &amp; win cash money
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
            <a href={Constants.APPLICATION_URL}>
              Join the RedwoodJS Build Competition
            </a>{' '}
            and challenge yourself to build something new and creative.
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
              <h4>Register</h4>
              <a
                href={Constants.APPLICATION_URL}
                target="_blank"
                rel="noreferrer"
              >
                Register to participate.
              </a>{' '}
              You'll receive:
              <ul>
                <li>An invitation to a weekly virtual meetup (optional)</li>
                <li>Access to a private Discord channel</li>
                <li>Connect with other participants and build a team</li>
                <li>FREE Sticker</li>
                <li>
                  Entry to our raffle and win 2{' '}
                  <a
                    href={Constants.CONFERENCE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    RedwoodJS Conference Tickets
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h4>Build</h4>
              You&apos;ll have until{' '}
              <strong className="text-carminePink">
                11:59pm PT September 8, 2023
              </strong>{' '}
              to build your project.
            </li>
            <li>
              <h4>Submit</h4>
              <strong className="text-carminePink">
                Submit your final project
              </strong>{' '}
              for review.
            </li>
          </ol>
        </section>
        <section>
          <h3>Resources</h3>
          <ul>
            <li>
              <a href={Constants.TUTORIAL} target="_blank" rel="noreferrer">
                Quick Start tutorial
              </a>
            </li>
            <li>
              <a
                href={Constants.REDWOODJS_URL}
                target="_blank"
                rel="noreferrer"
              >
                RedwoodJS Official Documentation
              </a>
            </li>
            <li>
              <a href={Constants.CONFERENCE_URL}>RedwoodJS Conference</a>
            </li>
            <li>
              <a href={Constants.APP_IDEAS} target="_blank" rel="noreferrer">
                Here are some app ideas
              </a>{' '}
              to inspire you.
            </li>
          </ul>
        </section>
        <section>
          <h3>Prizes</h3>
          <p>We will be awarding over $10k in prizes. Here’s the breakdown:</p>
          <ul>
            <li>1st Place - $5k</li>
            <li>2nd Place - $2k</li>
            <li>3rd Place - $1k</li>
            <li>4 Runners Up - $500 each</li>
          </ul>
          <p>
            Additionally, 1st, 2nd, and 3rd place winners will receive 1
            complimentary ticket to the conference, lodging during the event,
            and airfare for one individual from your team.
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
          <p>
            <em>
              This is not a pitch for funding. Projects will not be judged based
              on commercial application, which means whether or not your project
              is or could generate revenue is not a factor in this competition.
            </em>
          </p>
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
              Your final submission will require a demonstration video and/or
              working demo.
            </li>
            <li>
              Final submissions must be new projects, started after August 3,
              2023.
            </li>
            <li>
              If you’re under 18, you will need to obtain written permission
              from a parent or legal guardian to enter.
            </li>
            <li>
              For your final submission, you must provide a link to your project
              on{' '}
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
              for the competition.
            </li>
            <li>
              You&apos;ll have until{' '}
              <strong className="text-carminePink">
                11:59pm PT September 8, 2023
              </strong>{' '}
              to build your project.{' '}
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
          <p className="bg-slate-800 p-4">
            For any questions or to revoke a submission, please contact David at{' '}
            <a href={`mailto:${Constants.EMAIL}`}>{Constants.EMAIL}</a>
          </p>
          <ul>
            <li>This is not a pitch for funding.</li>
            <li>
              The RedwoodJS team cannot be held liable for any reason, and
              reserve the right to disqualify any submission for any reason they
              see fit.
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
