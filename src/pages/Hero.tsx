import { CORS_PROXY, DEMON_SLAYER_API, HERO_CHARACTERS } from "../config/api"
import { UseFetch } from "../hooks/UseFetch"
import Card from "../components/ui/Card"
import { motion } from "motion/react"

const Hero = () => {
    const { data, loading, error } = UseFetch(
        `${CORS_PROXY}${DEMON_SLAYER_API}?limit=45`
    )

    const characters_hero = data.filter((character) =>
        HERO_CHARACTERS.includes(character.id)
    )

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} 
            className="min-h-screen flex justify-center flex-col items-center gap-10 p-10">

            {error && <span className="text-white">Error: {error}</span>}
            {loading && <span className="text-white">Loading...</span>}

            {!loading && !error && (
                <div className="bg-transparent grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {characters_hero.map((character) => (
                        <Card key={character.id} character={character} />
                    ))}
                </div>
            )}
            <div className="px-6 py-2 rounded-xl text-center font-bold text-4xl md:text-6xl text-amber-50">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >Demon Slayer</motion.h2>
            </div>

        </motion.section>
    )
}

export default Hero
