import { useEffect, useState } from "react";

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onopen = () => {
      console.log("onopen");
      setSocket(socket);
    };
    socket.onmessage = (event) => {
      console.log("onmessage");
      console.log(event);
      console.log(event.data);
    };

    return () => disconnect();
  }, [url]);

  const send = (dataToSend) => {
    socket.send(dataToSend);
  };

  const disconnect = () => {
    if (socket != null) {
      socket.close();
      setSocket(null);
    }
  };

  return { disconnect, send };
};

export default useWebSocket;
