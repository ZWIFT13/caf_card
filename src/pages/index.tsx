import * as React from 'react';

import BG from '@/components/bg/bg';
import Card from '@/components/card/card';
import Demo from '@/components/card/demo';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div className='min-h-screen w-full bg-white'>
      <div className='z-5'>
        <BG></BG>
      </div>
      <Card></Card>
      <Demo></Demo>
    </div>
  );
}
