import { useEffect, useRef, useState } from "react"
import tailt from "tailt"
import { IconPause, IconPlay } from "./icons/IconMusics"

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>()
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
    }, [isPlaying])

    return  (
        <Player onClick={ () => setIsPlaying(!isPlaying) }>
            <audio ref={audioRef} loop src="https://cetsoncreck.com/static/media/cat-audio.f4cf2e55b39588e0bd0f.mp4"/>
            {isPlaying ? <IconPause/> : <IconPlay/>}
        </Player>
    )
}

const Player = tailt.button`
    fixed bottom-4 right-6 sm:bottom-6 sm:right-8 md:bottom-8 md:right-10 z-30
    flex justify-center items-center
    h-[4.5rem] w-[4.5rem] rounded-full
    bg-white bg-opacity-60 backdrop-blur-lg shadow-lg border border-[#999]
    fill-neutral-500 hover:fill-amber-600 hover:scale-110 active:scale-100
    duration-200
`

