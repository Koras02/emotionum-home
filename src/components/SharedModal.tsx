import {
     ArrowDownTrayIcon,
     ArrowTopRightOnSquareIcon,
     ArrowUturnLeftIcon,
     ChevronLeftIcon,
     ChevronRightIcon,
     XMarkIcon
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import Image from 'next/image'
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { variants } from '../utils/animationVariants';
import downloadPhoto from '../utils/downloadPhoto';
import { range } from '../utils/range';
import type { ImageProps, SharedModalProps } from '../utils/types';
import Twitter from './Icons/Twitter';

export default function SharedModal({
    index,
    images,
    changePhotoId,
    closeModal,
    navigation,
    currentPhoto,
    direction,
}: SharedModalProps) {
   const [loaded, setLoaded] = useState(false);

   let filteredImage = images?.filter((img: ImageProps) => 
   range (index - 15, index + 15).includes(img.id)
   )

   const handlers = useSwipeable({
    onSwipedLeft: () => changePhotoId(index + 1),
    onSwipedRight: () => changePhotoId( index - 1),
    trackMouse: true,
   })

   let currentImage = images ? images[index] : currentPhoto

   return (
      <MotionConfig
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30},
            opacity: { duration: 0.2},
         }}
        >
             
        </MotionConfig>
   )

  
}