

const Welcome = () => {
  return (
    <>
      <div className='w-3/12 flex flex-col gap-2'>
          <h1 className='text-2xl text-blue-400 font-bold'>Welcome, Solomon</h1>
          <p className='text-md'>Watch the short video below to see how the platform can help you</p>
          <iframe 
            className='w-full h-60 border-4' 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
    </>
  )
}

export default Welcome