import { motion } from "motion/react"
import { getCardGradientById } from "../../config/demonColors"
import type { Characters } from "../../types"

type Props = {
    character: Characters
}

const Card = ({ character }: Props) => {
    const name = character.name.split(" ")[0].toUpperCase()
    const marqueeText = `${name} ${name} ${name}`
    const gradientClasses = getCardGradientById(character.id)

    return (
        <motion.article
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            className={`relative w-64 h-[400px] overflow-hidden border-4 border-white shadow-xl group 
                  bg-gradient-to-b ${gradientClasses}`}
        >
            {/* fondo tipográfico */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <motion.div
                    className="absolute left-0 whitespace-nowrap 
                     text-[130px] font-black text-white/10 uppercase"
                    animate={{ x: ["0%", "-8%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    {marqueeText.repeat(6)}
                </motion.div>
            </div>

            {/* imagen */}
            <img
                className="absolute w-full h-auto scale-130 translate-y-23 z-10 transition-transform duration-300 group-hover:scale-140"
                src={character.img}
                alt={character.name}
            />

            {/* fade inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-15" />

            {/* nombre principal */}
            <div className="absolute bottom-4 left-4 z-20">
                <h4 className="text-white font-bold text-xl uppercase italic drop-shadow-md">
                    {character.name}
                </h4>
                <span className="text-red-50 text-xs font-bold tracking-widest">
                    DEMON SLAYER
                </span>
            </div>

            {/* panel lateral */}
            <motion.div
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-y-0 right-0 w-[70%] bg-black/80 backdrop-blur-sm z-30 
                   flex flex-col justify-center gap-2 px-4 text-sm text-white
                   pointer-events-none group-hover:pointer-events-auto"
            >
                <p className="font-semibold text-base uppercase truncate">
                    {character.name}
                </p>
                <p className="text-xs text-red-300 uppercase tracking-wide">
                    Demon Slayer
                </p>
                <div className="mt-2 flex flex-col gap-1 text-xs">
                    <span>
                        <span className="font-semibold">Age:</span>{" "}
                        {character.age !== undefined ? character.age : "Unknown"}
                    </span>
                    <span>
                        <span className="font-semibold">Gender:</span>{" "}
                        {character.gender}
                    </span>
                    <span>
                        <span className="font-semibold">Race:</span>{" "}
                        {character.race}
                    </span>
                </div>
            </motion.div>
        </motion.article>
    )
}

export default Card
