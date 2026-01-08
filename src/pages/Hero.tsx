import { CORS_PROXY, DEMON_SLAYER_API, HERO_CHARACTERS } from "../config/api"
import { UseFetch } from "../hooks/UseFetch"
import Card from "../components/ui/Card"

const Hero = () => {
    const { data, loading, error } = UseFetch(
        `${CORS_PROXY}${DEMON_SLAYER_API}?limit=45`
    )

    const characters_hero = data.filter((character) =>
        HERO_CHARACTERS.includes(character.id)
    )

    return (
        <section className="min-h-screen bg-neutral-900 flex flex-col items-center gap-10 p-10">
            <div className="bg-amber-600 px-6 py-2 rounded-xl text-center font-bold text-4xl md:text-5xl">
                <h2>Demon Slayer</h2>
            </div>

            {error && <span className="text-white">Error: {error}</span>}
            {loading && <span className="text-white">Loading...</span>}

            {!loading && !error && (
                <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {characters_hero.map((character) => (
                        <Card key={character.id} character={character} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Hero
