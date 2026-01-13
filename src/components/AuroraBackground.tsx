import type { ReactNode } from "react"

interface AuroraBackgroundProps {
    children: ReactNode
}

const AuroraBackground = ({ children }: AuroraBackgroundProps) => {
    return (
        <div className="min-h-dvh w-full relative overflow-hidden">
            {/* Animación */}
        

            {/* Fondo */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: `
            linear-gradient(45deg, #1a1a1a 0%, #003366 100%),
            repeating-linear-gradient(
              45deg,
              rgba(0, 255, 255, 0.1) 0px,
              rgba(0, 255, 255, 0.1) 20px,
              rgba(0, 255, 0, 0.1) 20px,
              rgba(0, 255, 0, 0.1) 40px
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(32, 196, 232, 0.3) 0%,
              rgba(76, 201, 240, 0.1) 100%
            )
          `,
                    backgroundBlendMode: "normal, overlay, overlay",
                    animation: "aurora 8s linear infinite",
                }}
            />

            {/* Contenido */}
            {children}
        </div>
    )
}

export default AuroraBackground
