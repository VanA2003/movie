import { useEffect, useState } from "react"

export const useViewport = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth || document.document.clientWidth)
    
    const handleWindowWidth = () => {
        const width = window.innerWidth || document.document.clientWidth
        setWindowWidth(width)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth)
        return () => {
            window.removeEventListener('resize', handleWindowWidth)
        }
    },[])
    return [windowWidth]
}
