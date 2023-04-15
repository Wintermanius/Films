import { FC, useEffect, useRef, useState } from "react"
import { FilmType } from "../../types/film-type"

type VideoPlayerProps = {
  isPlay: boolean
  films: FilmType
}

const VideoPlayer: FC<VideoPlayerProps> = ({isPlay, films}) => {
  const {video, poster} = films

  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlay) {
        videoRef.current.play()
      } else {
        videoRef.current.load()
      }
    }
  }, [isPlay])

  return (
      <video ref={videoRef} muted src={video} className="player__video" poster={poster} loop></video>
  )
}

export default VideoPlayer
