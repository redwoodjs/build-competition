import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Build Competition</h1>
      <p>Coming Soon 🚀</p>
    </>
  )
}

export default HomePage
