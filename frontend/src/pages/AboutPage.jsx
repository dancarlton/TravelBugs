import NavBar from "../layouts/NavBar"
import AboutHero from "../sections/About/AboutHero"
import Mission from "../sections/about/Mission"
import Team from "../sections/about/Team"
import Footer from "../layouts/Footer"
import JoinTeam from "../sections/about/JoinTeam"

const AboutPage = () => {
  return (
    <main>
      <NavBar />
      <AboutHero />
      <Mission />
      <Team />
      <JoinTeam />
      <Footer />
    </main>
  )
}

export default AboutPage
