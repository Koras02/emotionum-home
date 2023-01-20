import { NextPage } from 'next';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto';
import { useRef } from 'react';


const Home: NextPage = ({ images }: { images: ImageProps[] }) => {

  const router = useRouter();
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>;

  return (
    <>
      <Head>
        <title>Next.js emotionum image</title>
        <meta name="description" content="https://nextjsconf-pics.vercel.app/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-auto max-w-[1960px] p-4 bg-white'>
        {

        }
         <div className='columns-1 gap-4 sm-columns-2 xl:columns-3 2xl:columns-4'>
           <h1 className='font-bold'>테스트</h1>
         </div>
      </main>
     
    </>
  )
}

export default Home;