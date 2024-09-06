import Image from "next/image";
import Link from "next/link";

  export function HomeCard({title, url}:{title:string, url: string}) {
    return (
      <div>

      <div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm mx-3">
                  <Link href={url}>
                    <Image className="rounded-lg"
                      src="/menshoes.webp"
                      width={500}
                      height={500}
                      alt="Picture of the author"/>
                  </Link>
      </div>
      
       <div className="underline cursor-pointer mt-3 text-2xl font-semibold leading-none  tracking-tight">
         <Link href={url}>
            {title}
        </Link>
        </div>
     </div>
    )
  }