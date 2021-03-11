import React from "react";

interface CommericalManagerProps {}

export default function CommericalManager(props: CommericalManagerProps) {
  return <div>test</div>;
}


// POST https://api.twitch.tv/helix/channels/commercial


// curl -X POST 'https://api.twitch.tv/helix/channels/commercial' \
// -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
// -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \
// -H 'Content-Type: application/json' \
// --data-raw '{
//   "broadcaster_id": "41245072",
//   "length": 60
// }'

// {
//     "data": [{
//       "length" : 60,
//       "message" : "",
//       "retry_after" : 480
//     }]
//   }