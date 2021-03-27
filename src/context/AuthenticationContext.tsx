import React, { createContext, useState } from "react";

interface AuthenticationInfo {
  client_secret: string;
  client_id: string;
  redirect_uri: string;
  reponse_type: string;
  scope_list: string[];
  access_token?: string;
}

type AuthenticationInfoType = {
  authenticationInfo: AuthenticationInfo;
  fetchAccessToken: (authorizationCode: string) => void;
};

export const AuthenticationContext = createContext(null);

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>();
  const [
    authenticationInfo,
    setAuthenticationInfo,
  ] = useState<AuthenticationInfo>({
    client_secret: "wsmo5bpwx7uciblm9qrp5964tul6rk",
    client_id: "x6fjleftolmy44txegskqtkq1t358y",
    redirect_uri: "x6fjleftolmy44txegskqtkq1t358y",
    reponse_type: "http://localhost:3000/home",
    scope_list: ["chat:read"],
    access_token: accessToken,
  });
  return <>{children}</>;
};

// export default function AuthenticationInfo(props: any) {
//   const link = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scopestringscopeList}`;
  // const getAccesssTokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode} &grant_type=authorization_code&redirect_uri=${redirectUri}`;
// }
