function StoryBar(){

  const stories = [1,2,3,4,5,6,7]

  return(

    <div className="flex gap-4 overflow-x-auto p-4 border-b bg-white">

      {stories.map((s,i)=>(

        <div key={i} className="text-center">

          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500">

            <div className="bg-white w-full h-full rounded-full flex items-center justify-center">

              <img
                src="https://i.pravatar.cc/100"
                className="w-14 h-14 rounded-full"
              />

            </div>

          </div>

          <p className="text-xs mt-1">user{i}</p>

        </div>

      ))}

    </div>

  )

}

export default StoryBar