import { FC, useEffect, useRef, useState } from "react"
import { FilmType } from "../../types/film-type"

type VideoPlayerProps = {
  isPlay: boolean
  films: FilmType
}

const VideoPlayer: FC<VideoPlayerProps> = ({isPlay, films}) => {
  const {videoLink, previewImage} = films

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
      <video ref={videoRef} muted src={videoLink} className="player__video" poster={previewImage} loop></video>
  )
}

export default VideoPlayer
