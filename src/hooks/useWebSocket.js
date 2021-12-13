import { useEffect, useState } from "react";

const useWebSocket = (url, callbackOnMessage) => {
  const [socket, setSocket] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onopen = () => {
      console.log("onopen");
      setSocket(socket);
      setError(null);
    };
    socket.onmessage = (event) => {
      console.log("onmessage");
      console.log(event);
      console.log(event.data);
      callbackOnMessage(JSON.parse(event.data));
    };
    socket.onerror = () => {
      console.log("onerror");
      setSocket(null);
      setError(true);
    };

    return () => {
      if (socket != null) {
        console.log("onclose");
        socket.close();
        setSocket(null);
        setError(null);
      }
    };
  }, [url, callbackOnMessage]);

  const send = (dataToSend) => {
    if (socket != null) {
      socket.send(dataToSend);
    } else {
      setError(true);
    }
  };

  return { send, error };
};

export default useWebSocket;
