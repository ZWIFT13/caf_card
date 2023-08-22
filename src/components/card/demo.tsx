const post = [
  'COSPLAYER',
  'PHOTOGRAPER',
  'CONTENT CREATOR',
  'EXHIBITOR',
  'CRAFTER',
];

const name = ['DELTA', 'MISAKI', 'ZWIFT', 'SHIBA.PW', 'BELLAMI', 'ONNIES'];

import Image from 'next/image';
import pic1 from 'public/bellami2.png';
import caf_logo from 'public/caf_b.png';
import delta from 'public/delta.jpg';
import misaki from 'public/misaki.jpg';
import shiba from 'public/shibaa.jpg';
import zwift from 'public/zwift.jpg';
function Demo() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center text-center'>
      {/**----------------------------------------------------------------*/}
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

      {/**----------------------------------------------------------------*/}

      <div className=' cardM flex items-center justify-center overflow-hidden rounded-[40px]  text-white'>
        <div className='z-9  h-full w-full'>
          <Image
            className=''
            priority={true}
            src={zwift}
            fill
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>

        <div className='font-mont absolute left-0 top-10 flex flex-col items-start justify-start gap-2 rounded-e-3xl  bg-black p-6 font-extrabold text-white mix-blend-soft-light backdrop-blur-md'>
          <div className='text-7xl '>{name[2]}</div>
          <div className='text-3xl'>{post[2]}</div>
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

      {/**----------------------------------------------------------------*/}

      <div className=' cardM flex items-center justify-center overflow-hidden rounded-[40px]  text-white'>
        <div className='z-9  h-full w-full'>
          <Image
            className=''
            priority={true}
            src={delta}
            fill
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>

        <div className='font-mont absolute left-0 top-10 flex flex-col items-start justify-start gap-2 rounded-e-3xl  bg-black p-6 font-extrabold text-white mix-blend-soft-light backdrop-blur-md'>
          <div className='text-7xl '>{name[0]}</div>
          <div className='text-3xl'>{post[1]}</div>
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

      {/**----------------------------------------------------------------*/}

      <div className=' cardM flex items-center justify-center overflow-hidden rounded-[40px]  text-white'>
        <div className='z-9  h-full w-full'>
          <Image
            className=''
            priority={true}
            src={shiba}
            fill
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>

        <div className='font-mont absolute left-0 top-10 flex flex-col items-start justify-start gap-2 rounded-e-3xl  bg-black p-6 font-extrabold text-white mix-blend-soft-light backdrop-blur-md'>
          <div className='text-7xl '>{name[3]}</div>
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

      {/**----------------------------------------------------------------*/}

      <div className=' cardM flex items-center justify-center overflow-hidden rounded-[40px]  text-white'>
        <div className='z-9  h-full w-full'>
          <Image
            className=''
            priority={true}
            src={misaki}
            fill
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>

        <div className='font-mont absolute left-0 top-10 flex flex-col items-start justify-start gap-2 rounded-e-3xl  bg-black p-6 font-extrabold text-white mix-blend-soft-light backdrop-blur-md'>
          <div className='text-7xl '>{name[1]}</div>
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

export default Demo;
