import Navbar from "../components/Navbar";

function Profile(){

  return(

    <div className="bg-gray-100 min-h-screen">

      <Navbar/>

      <div className="max-w-xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-4">
          Profile
        </h2>

        <p>User posts will appear here</p>

      </div>

    </div>

  )

}

export default Profile