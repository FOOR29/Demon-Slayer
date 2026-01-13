import { CORS_PROXY, DEMON_SLAYER_API } from "../config/api"
import { UseFetch } from "../hooks/UseFetch"

const TestApi = () => {

    // const { data, loading, error } = UseFetch(`${CORS_PROXY}${DEMON_SLAYER_API}?id=45`) //para tarer un solo personaje
    // const { data, loading, error } = UseFetch(`${CORS_PROXY}${DEMON_SLAYER_API}?page=2&limit=2`) //para tarer un solo personaje
    const { data, loading, error } = UseFetch(`${CORS_PROXY}${DEMON_SLAYER_API}?=id=9`)

    return (
        <div className="bg-green-500 min-h-screen px-4 py-6">
            {/* Título arriba */}
            <h2 className="font-extrabold text-3xl mb-6 text-center">
                TestApi
            </h2>

            {/* Contenedor centrado */}
            <div className="flex justify-center">
                <div className="bg-amber-300 w-full rounded-xl shadow-lg">
                    {error && <span>Error: {error}</span>}
                    {loading && <span>Loading...</span>}

                    {data?.map(character => (
                        <div
                            key={character.id}
                            className="bg-sky-500 flex justify-center items-center flex-col rounded-lg overflow"
                        >
                            <div className="w-52 h-72 bg-amber-200 overflow-hidden rounded-lg">
                                <img
                                    className="w-full h-auto scale-150 translate-y-20"
                                    src={character.img}
                                    alt={character.name}
                                />
                            </div>

                            <div className="p-3 flex flex-col">
                                <span className="font-semibold text-lg block text-center">
                                    name: {character.name}
                                </span>
                                <p>
                                    age: {character.age}
                                </p>
                                <span>
                                    gender: {character.gender}
                                </span>
                                <span>
                                    race: {character.race}
                                </span>
                                <span>
                                    quote: {character.quote}
                                </span>
                                <span>
                                    desciption: {character.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default TestApi