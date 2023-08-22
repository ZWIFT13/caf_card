const post = [
  'COSPLAYER',
  'PHOTOGRAPER',
  'CONTENT CREATOR',
  'EXHIBITOR',
  'CRAFTER',
];

const name = ['DELTA', 'MISAKI', 'ZWIFT', 'SHIBA.PW', 'BELLAMI', 'ONNIES'];

import Image from 'next/image';
import pic1 from 'public/bellami.jpg';
import caf_logo from 'public/caf_b.png';
function Card() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center text-center'>
      <div className='font-mont flex h-[200px] w-full items-center justify-center text-6xl font-bold'>
        CAF MEMBER CARD 1.0 DEMO
      </div>
      <div className=' cardM flex items-center justify-center overflow-hidden rounded-[40px]  text-white'>
        <div className='z-9  h-full w-full'>
          <Image
            className=''
            priority={true}
            src={pic1}
            fill
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>

        <div className='font-mont absolute left-0 top-10 flex flex-col items-start justify-start gap-2 rounded-e-3xl  bg-black p-6 font-extrabold text-white mix-blend-soft-light backdrop-blur-md'>
          <div className='text-7xl '>{name[4]}</div>
          <div className='text-3xl'>{post[0]}</div>
        </div>

        <div className='absolute bottom-7 right-7 mix-blend-soft-light'>
          <Image
            className=''
            width={504}
            height={193}
            priority={true}
            src={caf_logo}
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>

        <div className='absolute bottom-7 right-7 mix-blend-soft-light'>
          <Image
            className=''
            width={504}
            height={193}
            priority={true}
            src={caf_logo}
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
