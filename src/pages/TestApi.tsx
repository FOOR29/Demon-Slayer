import { CORS_PROXY, DEMON_SLAYER_API } from "../config/api"
import { UseFetch } from "../hooks/UseFetch"

const TestApi = () => {

    const { data, loading, error } = UseFetch(`${CORS_PROXY}${DEMON_SLAYER_API}?id=30`)

    return (
        <div>
            <h2>TestApi</h2>
            <div>
                {error && <span>Error: {error}</span>}
                {loading && <span>Loanding</span>}
                {data?.map(character => (
                    <div key={character.id}>
                        <img
                            className="h-fit w-50"
                            src={character.img} alt={character.name} />
                        <span>{character.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TestApi