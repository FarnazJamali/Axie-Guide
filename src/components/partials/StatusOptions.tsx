import Image from 'next/image'
import { OptionProps } from 'react-select'
import SelectComponentProps from 'react-select'
import { status_data } from '../../../mock'

type StatusOptionsProps = OptionProps<
  {
    label: string
    value: string
    image: string
  },
  false
>

const StatusOptions = (props: StatusOptionsProps) => {
    const handleClicked = () => {
        console.log("1")
    }
  return (
    <div className="h-40 overflow-auto" {...props}>
      {status_data.map((item) => (
        <div
          className="flex gap-1 hover:bg-pink hover:text-white hover:cursor-pointer"
              key={item.label}
              onClick={handleClicked}
        >
          <Image src={item.image} width={30} height={30} alt={item.label} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default StatusOptions
