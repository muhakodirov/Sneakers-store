'use client' // Error boundaries must be Client Components
 
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    const router = useRouter()

  return (
    <div className='text-center mt-60'>
      <h2 className='text-3xl font-bold text-red-700'>Etwas ist schiefgelaufen 😢 </h2>
      <button className="p-2 mt-6 hover:bg-green-700 transition border rounded-lg bg-green-500" 
        onClick={() => reset()}>
        <span className="text-lg text-white font-bold"> Versuch es nochmal </span>
      </button> <br />
      <button onClick={()=>router.back()}>
         oder zurück
      </button>
      
    </div>
  )
}