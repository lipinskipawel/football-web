import { useEffect, useState } from "react";

/**
 * Simple custom hook that will connect to given WebSocket url.
 *
 * It automatically converts data to JSON format whenever data is being received
 * or sent.
 *
 * @param url that this hook will connect to
 * @param callbackOnMessage is a function that will be invoked with the data on every received message
 * @return {send, error} send is a function that is able to send data through WebSocket
 *                       error is a state that will indicate any error during the connection
 */
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
      socket.send(JSON.stringify(dataToSend));
    } else {
      setError(true);
    }
  };

  return { send, error };
};

export default useWebSocket;
