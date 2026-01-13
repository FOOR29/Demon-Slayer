import { CORS_PROXY, DEMON_SLAYER_API, DEMON_CHARACTERS } from "../config/api"
import { UseFetch } from "../hooks/UseFetch"
import Card from "./ui/Card"

const ListCard = () => {
    const { data, loading, error } = UseFetch(
        `${CORS_PROXY}${DEMON_SLAYER_API}?limit=45`
    )

    const characters_hero = data?.filter((character) =>
        DEMON_CHARACTERS.includes(character.id)
    )

    return (
        <section className="min-h-screen bg-neutral-900 flex justify-center items-center p-10">
            {loading && <span className="text-white">Loading...</span>}
            {error && <span className="text-white">Error: {error}</span>}

            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {characters_hero?.map((character) => (
                        <Card key={character.id} character={character} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default ListCard
