import {Inter} from 'next/font/google'
import {Lusitana} from 'next/font/google'
import {Roboto} from 'next/font/google'
export const inter = Inter({subsets: ['latin']})
export const lusitana : NextFont = Lusitana({subsets:['latin'], weight: "400"})
export const roboto : NextFont = Roboto({subsets:['cyrillic'], weight: "900"})