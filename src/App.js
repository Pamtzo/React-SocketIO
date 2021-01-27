import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");
  const [socket, setSocket] = useState()

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT+'/admin');
    setSocket(socket)
    socket.on("Count", data => {
      setResponse(data);
    });
    console.log(socket)
    socket.emit("Join_office", "2")

    return () => socket.disconnect();
  }, []);

  const Press = () =>{
    socket.emit("Press")
  }

  return (
    <div>
    <p>
      Cantidad de veces presionado: {response}
    </p>
    <button onClick={()=>Press()}> Aqui </button>
    </div>
  );
}

export default App;