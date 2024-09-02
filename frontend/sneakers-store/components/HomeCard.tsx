  export function HomeCard({title, desc}:{title:string, desc: string}) {
    return (
      <div className="w-[350px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg border bg-card text-card-foreground shadow-sm mx-3">
          <div className="flex flex-col space-y-1.5 p-6">
              <div className="underline cursor-pointer text-2xl font-semibold leading-none tracking-tight">
                  {title}
              </div>
              <div className="text-sm text-muted-foreground">
                  {desc}
              </div>
          </div>
      </div>
    )
  }