import AuroraBackground from "./components/AuroraBackground"
import CharactersSection from "./pages/CharactersSection"
import Hero from "./pages/Hero"
// import TestApi from "./pages/TestApi"

const App = () => {
  return (
    <AuroraBackground>
      {/* <TestApi /> */}
      <Hero />
      <CharactersSection />
    </AuroraBackground>
  )
}

export default App
