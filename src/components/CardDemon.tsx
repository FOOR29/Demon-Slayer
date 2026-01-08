import { motion } from "motion/react"
import { CORS_PROXY, DEMON_SLAYER_API, DEMON_CHARACTERS } from "../config/api"
import { UseFetch } from "../hooks/UseFetch"

const CARD_BG_BY_ID: Record<number, string> = {
  1: "from-red-600 to-red-800",
  2: "from-emerald-500 to-emerald-700",
  4: "from-indigo-500 to-indigo-700",
  6: "from-amber-500 to-amber-700",
  7: "from-fuchsia-500 to-fuchsia-700",
  8: "from-sky-500 to-sky-700",
}

const CardDemon = () => {
  const { data, loading, error } = UseFetch(
    `${CORS_PROXY}${DEMON_SLAYER_API}?limit=45`
  )

  const characters_hero = data?.filter((character) =>
    DEMON_CHARACTERS.includes(character.id)
  )

  if (loading) return <span className="text-white">Loading...</span>
  if (error) return <span className="text-white">Error: {error}</span>

  return (
    <section className="min-h-screen bg-neutral-900 flex justify-center items-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters_hero?.map((character) => {
          const name = character.name.split(" ")[0].toUpperCase()
          const marqueeText = `${name} — ${name} — ${name} — `
          const gradientClasses =
            CARD_BG_BY_ID[character.id] || "from-red-600 to-red-800"

          return (
            <motion.article
              key={character.id}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              className={`relative w-64 h-[400px] overflow-hidden border-4 border-white shadow-xl group 
                          bg-gradient-to-b ${gradientClasses}`}
            >
              {/* FONDO TIPOGRÁFICO HORIZONTAL ANIMADO */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <motion.div
                  className="absolute top-10 left-0 whitespace-nowrap 
                             text-[60px] font-black text-white/10 uppercase 
                             tracking-[0.1em]"
                  animate={{ x: ["-35%", "0%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  {marqueeText.repeat(4)}
                </motion.div>

                <motion.div
                  className="absolute bottom-10 right-0 whitespace-nowrap 
                             text-[60px] font-black text-white/10 uppercase 
                             tracking-[0.1em]"
                  animate={{ x: ["0%", "-35%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  {marqueeText.repeat(4)}
                </motion.div>
              </div>

              {/* IMAGEN PERSONAJE */}
              <img
                className="absolute w-full h-auto scale-130 translate-y-23 z-10 transition-transform duration-300 group-hover:scale-140"
                src={character.img}
                alt={character.name}
              />

              {/* NOMBRE PRINCIPAL */}
              <div className="absolute bottom-4 left-4 z-20">
                <h4 className="text-white font-bold text-xl uppercase italic drop-shadow-md">
                  {character.name}
                </h4>
                <span className="text-red-50 text-xs font-bold tracking-widest">
                  DEMON SLAYER
                </span>
              </div>

              {/* PANEL DE DATOS LATERAL (HOVER) */}
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
                    {character.age || "Unknown"}
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
        })}
      </div>
    </section>
  )
}

export default CardDemon
