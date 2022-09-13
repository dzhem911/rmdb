import Image from 'next/image'

type Props = {
  imgUrl: string;
}

const Thumb = ({imgUrl}: Props) => (
  <Image src={imgUrl}
         placeholder='blur'
         blurDataURL='/placeholder.jpeg'
         className='rounded-lg'
         layout='fill'
         objectFit='cover'
         alt='thumb'
  />
)

export default Thumb