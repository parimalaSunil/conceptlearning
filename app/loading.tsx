

export default function Loading() {
   
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="flex flex-col items-center gap-4 w-full max-w-sm p-4">
        <div className="flex items-center gap-4 w-full">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-blue-200"></div>
          <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-4 w-20 bg-blue-200"></div>
            <div className="skeleton h-4 w-28 bg-blue-200"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full bg-blue-200"></div>
      </div>
    </div>
      
      
    )
  }



