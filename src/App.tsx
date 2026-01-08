import CharactersSection from "./pages/CharactersSection"
import Hero from "./pages/Hero"
import TestApi from "./pages/TestApi"

const App = () => {
  return (
    <div className="min-h-dvh">
      {/* <TestApi /> */}
      <Hero />
      <CharactersSection />
    </div>
  )
}

export default App