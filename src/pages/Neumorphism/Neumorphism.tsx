import { useEffect, useState } from 'react'
import { StyleNavigation } from '../../components/StyleNavigation'
import {
  Controls,
  Cover,
  CoverWrap,
  Info,
  Page,
  Play,
  Player,
  Range,
  Round,
  Time,
  Top,
  Volume,
} from './styled'

const tracks = ['Quiet Motion', 'Soft Horizon', 'Velvet Morning']

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = String(seconds % 60).padStart(2, '0')

  return minutes + ':' + remainingSeconds
}

export function Neumorphism() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(42)
  const [volume, setVolume] = useState(68)
  const [track, setTrack] = useState(0)

  useEffect(() => {
    if (!playing) {
      return
    }

    const timer = window.setInterval(() => {
      setProgress((currentProgress) => {
        return currentProgress >= 228 ? 0 : currentProgress + 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [playing])

  function changeTrack(amount: number) {
    setTrack((currentTrack) => {
      return (currentTrack + amount + tracks.length) % tracks.length
    })
    setProgress(0)
  }

  return (
    <Page>
      <StyleNavigation theme="neo" brand="Mellow" />

      <Player>
        <Top>
          <Round $active type="button" aria-label="Open queue">
            ≡
          </Round>
          <span>Now playing</span>
          <Round type="button" aria-label="More track options">
            •••
          </Round>
        </Top>

        <CoverWrap $playing={playing}>
          <Cover $playing={playing} />
        </CoverWrap>

        <Info>
          <h2>{tracks[track]}</h2>
          <p>Studio Collection · Vol. 02</p>
        </Info>

        <Range
          aria-label="Track progress"
          type="range"
          min="0"
          max="228"
          value={progress}
          onChange={(event) => setProgress(Number(event.target.value))}
        />
        <Time>
          <span>{formatTime(progress)}</span>
          <span>3:48</span>
        </Time>

        <Controls>
          <Round
            type="button"
            aria-label="Previous track"
            onClick={() => changeTrack(-1)}
          >
            ←
          </Round>
          <Play
            type="button"
            $playing={playing}
            aria-label={playing ? 'Pause track' : 'Play track'}
            aria-pressed={playing}
            onClick={() => setPlaying((isPlaying) => !isPlaying)}
          >
            {playing ? 'Ⅱ' : '▶'}
          </Play>
          <Round
            type="button"
            aria-label="Next track"
            onClick={() => changeTrack(1)}
          >
            →
          </Round>
        </Controls>

        <Volume>
          <span>Vol</span>
          <Range
            aria-label="Volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
          />
          <span>{volume}</span>
        </Volume>
      </Player>
    </Page>
  )
}