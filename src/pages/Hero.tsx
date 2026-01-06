import { motion } from "motion/react";
import { CORS_PROXY, DEMON_SLAYER_API, HERO_CHARACTERS } from "../config/api"
import { UseFetch } from "../hooks/UseFetch"

const Hero = () => {

    const { data, loading, error } = UseFetch(`${CORS_PROXY}${DEMON_SLAYER_API}?limit=45`)
    //filter pricipal chracaters
    const characters_hero = data.filter(character =>
        HERO_CHARACTERS.includes(character.id)
    )


    return (
        <div className="min-h-screen bg-green-500 flex justify-center flex-col items-center gap-7">
            <section>
                {/* img presentation */}
                <div className="bg-amber-500 grid grid-cols-6 gap-3.5">
                    {error && <span>Error: {error}</span>}
                    {loading && <span>Loading...</span>}
                    {characters_hero?.map(character => (
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-52 h-70 bg-black overflow-hidden flex justify-center items-center border-2 border-gray-400"
                            key={character.id}>
                            <img
                                className="w-full h-auto scale-150 translate-y-23 bg-black"
                                src={character.img}
                                alt={character.name} />
                        </motion.div>
                    ))}
                </div>
            </section>
            <div className="bg-amber-600 h-fit w-fit text-center font-bold text-6xl">
                <h2>Demon Slayer</h2>
            </div>
        </div>
    )
}

export default Hero