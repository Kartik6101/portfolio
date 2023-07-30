'use client';

import Head from 'next/head';
import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
    </main>
  );
}
