import { rootUrl } from '@/app/variables/sharedVariables'
import Image from 'next/image'
import Link from 'next/link'

const LogoComponent = () => {
  return (
    <Link href={`${rootUrl}`}>
      <Image alt='logo' src={"/images/logos/logo.png"} width={100} height={100} priority={true} className='object-cover w-full h-full flex'>
      </Image>
    </Link>
  )
}

export default LogoComponent