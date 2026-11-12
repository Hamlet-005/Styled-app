import { useEffect, useState } from 'react'
import { StyleNavigation } from '../../components/StyleNavigation'
import {
  City,
  Dashboard,
  Day,
  Forecast,
  Main,
  Orb,
  Page,
  Shell,
  Side,
  Stat,
  Stats,
  Sun,
  Temp,
  Toggle,
  Top,
} from './styled'

interface WeatherData {
  currentTemperature: number
  humidity: number
  wind: number
  uv: number
  code: number
  dates: string[]
  dailyCodes: number[]
  dailyMaximums: number[]
  dailyMinimums: number[]
}

interface WeatherResponse {
  current: {
    temperature_2m: number
    relative_humidity_2m: number
    wind_speed_10m: number
    weather_code: number
  }
  daily: {
    time: string[]
    weather_code: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    uv_index_max?: number[]
  }
}

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=40.1872&longitude=44.5152&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=Asia%2FYerevan&forecast_days=5'

function getWeatherDescription(code: number) {
  if (code === 0) return 'Clear skies'
  if (code <= 2) return 'Partly cloudy'
  if (code === 3) return 'Overcast'
  if (code >= 45 && code <= 48) return 'Foggy'
  if (code >= 51 && code <= 57) return 'Drizzle'
  if (code >= 61 && code <= 67) return 'Rain'
  if (code >= 71 && code <= 77) return 'Snow'
  if (code >= 80 && code <= 82) return 'Rain showers'
  if (code >= 95) return 'Thunderstorms'
  return 'Mixed conditions'
}

function getWeatherIcon(code: number) {
  if (code === 0) return '☀'
  if (code <= 2) return '🌤'
  if (code === 3) return '☁'
  if (code >= 51 && code <= 67) return '🌧'
  if (code >= 71 && code <= 77) return '❄'
  if (code >= 80 && code <= 82) return '🌦'
  if (code >= 95) return '⛈'
  return '☁'
}

export function Glassmorphism() {
  const [metric, setMetric] = useState(true)
  const [selectedDay, setSelectedDay] = useState(0)
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetch(weatherUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Weather request failed')
        }

        return response.json() as Promise<WeatherResponse>
      })
      .then((data) => {
        setWeather({
          currentTemperature: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
          wind: data.current.wind_speed_10m,
          uv: data.daily.uv_index_max?.[0] ?? 0,
          code: data.current.weather_code,
          dates: data.daily.time,
          dailyCodes: data.daily.weather_code,
          dailyMaximums: data.daily.temperature_2m_max,
          dailyMinimums: data.daily.temperature_2m_min,
        })
      })
      .catch((error: Error) => {
        if (error.name !== 'AbortError') {
          setWeather(null)
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  function convertTemperature(value: number) {
    if (metric) {
      return Math.round(value)
    }

    return Math.round((value * 9) / 5 + 32)
  }

  const temperature = weather
    ? convertTemperature(weather.currentTemperature)
    : null

  const forecasts =
    weather?.dates.map((date, index) => ({
      date,
      code: weather.dailyCodes[index],
      maximum: convertTemperature(weather.dailyMaximums[index]),
      minimum: convertTemperature(weather.dailyMinimums[index]),
    })) ?? []

  return (
    <Page>
      <Orb $one />
      <Orb />
      <StyleNavigation theme="glass" brand="Aether" />

      <Shell>
        <Dashboard>
          <Side>
            <City>Yerevan · Armenia</City>
            <Sun />
            <Temp>
              {loading ? '—' : temperature}
              <small>°{metric ? 'C' : 'F'}</small>
            </Temp>
            <strong>
              {weather
                ? getWeatherDescription(weather.code)
                : 'Loading weather...'}
            </strong>
          </Side>

          <Main>
            <Top>
              <div>
                <small>ARMENIA · YEREVAN</small>
                <h2>{weather ? '5-day forecast' : 'Weather unavailable'}</h2>
              </div>
              <Toggle
                $metric={metric}
                aria-label="Toggle temperature unit"
                onClick={() => setMetric((currentMetric) => !currentMetric)}
              >
                <span />
              </Toggle>
            </Top>

            <Forecast>
              {forecasts.map((forecast, index) => {
                const date = new Date(forecast.date + 'T12:00:00')
                const dayLabel = date.toLocaleDateString('en-US', {
                  weekday: 'short',
                })

                return (
                  <Day
                    $active={selectedDay === index}
                    key={forecast.date}
                    onClick={() => setSelectedDay(index)}
                  >
                    <small>{getWeatherIcon(forecast.code)}</small>
                    <span>{dayLabel}</span>
                    {forecast.maximum}° / {forecast.minimum}°
                  </Day>
                )
              })}
            </Forecast>

            <Stats>
              <Stat>
                <small>WIND</small>
                <strong>
                  {weather
                    ? Math.round(weather.wind) + ' km/h'
                    : '—'}
                </strong>
              </Stat>
              <Stat>
                <small>HUMIDITY</small>
                <strong>{weather ? weather.humidity + '%' : '—'}</strong>
              </Stat>
              <Stat>
                <small>UV INDEX</small>
                <strong>{weather ? weather.uv.toFixed(1) : '—'}</strong>
              </Stat>
            </Stats>
          </Main>
        </Dashboard>
      </Shell>
    </Page>
  )
}