import React from "react";

interface TwitchChatWindowProps {
    channelName: string; 
}

export default function TwitchChatWindow(props: TwitchChatWindowProps) {
    const {channelName} = props; 

  return (
    <iframe
      src={`https://www.twitch.tv/embed/${channelName}/chat?parent=<parent>`}
      height='<height>'
      width='<width>'
    ></iframe>
  );
}
