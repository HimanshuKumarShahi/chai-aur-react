import Navbar from "../components/Navbar";
import MessageBox from "../components/MessageBox";

function Messages(){

  const receiverId = "USER_ID_HERE";

  return(

    <div>

      <Navbar/>

      <h2>Chat</h2>

      <MessageBox receiver={receiverId}/>

    </div>

  )

}

export default Messages;