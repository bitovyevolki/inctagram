import * as SliderRadix from '@radix-ui/react-slider'
import { Typography } from '../typography'
import s from './slider.module.scss'

type Props = {
  value: number[]
  onChange?: (newValue: number[]) => void
  max?: number
  min?: number
  step?: number
}

export const Slider = (props: Props) => {
  const { value, onChange, max = 10, min = 0, step = 1 } = props

  return (
    <div className={s.wrapper}>
      <div>
        <Typography variant="body1" className={s.count}>
          {min}
        </Typography>
      </div>
      <SliderRadix.Root
        className={s.SliderRoot}
        defaultValue={[value[0], value[1]]}
        max={max}
        min={min}
        step={step}
        onValueChange={onChange}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.SliderThumb} aria-label="Volume" />
        <SliderRadix.Thumb className={s.SliderThumb} aria-label="Volume" />
      </SliderRadix.Root>
      <div>
        <span className={s.count}>{max}</span>
      </div>
    </div>
  )
}
