import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const useSockJS = (url, messageStream) => {
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS(`http://localhost:8080${url}`);
    const stompClientCreated = Stomp.over(socket);
    setStompClient(stompClientCreated);

    stompClientCreated.connect({}, (frame) => {
      stompClientCreated.subscribe(messageStream, (messageOutput) => {
        console.log(JSON.parse(messageOutput.body));
      });
    });

    return () => disconnect();
  }, [url, messageStream]);

  const send = (dataToSend) => {
    stompClient.send("/app/hello", {}, JSON.stringify(dataToSend));
  };

  const disconnect = () => {
    if (stompClient != null) {
      stompClient.disconnect();
      setStompClient(null);
    }
  };

  return { disconnect, send };
};

export default useSockJS;
