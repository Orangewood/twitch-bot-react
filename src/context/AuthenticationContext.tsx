import React, { createContext, useEffect, useState } from "react";

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
  const [clientSecret, setClientSecret] = useState<string>(
    "wsmo5bpwx7uciblm9qrp5964tul6rk"
  );
  const [clientId, setClientId] = useState<string>(
    "x6fjleftolmy44txegskqtkq1t358y"
  );
  const [redirectUri, setRedirectUri] = useState<string>(
    "x6fjleftolmy44txegskqtkq1t358y"
  );
  const [responseType, setResponseType] = useState<string>(
    "http://localhost:3000/home"
  );
  const [scopeList, setScopeList] = useState<string[]>(["chat:read"]);

  const [
    authenticationInfo,
    setAuthenticationInfo,
  ] = useState<AuthenticationInfo>({
    client_secret: clientSecret,
    client_id: clientId,
    redirect_uri: redirectUri,
    reponse_type: responseType,
    scope_list: scopeList,
    access_token: accessToken,
  });

  const link = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scopestring=${scopeList}`;
  // const getAccesssTokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode} &grant_type=authorization_code&redirect_uri=${redirectUri}`;

  useEffect(() => {
    fetch(link).then(() => setAccessToken);
    console.log(accessToken)
  }, []);

  return <>{children}</>;
};

// export default function AuthenticationInfo(props: any) {
//   const link = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scopestringscopeList}`;
//   const getAccesssTokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode} &grant_type=authorization_code&redirect_uri=${redirectUri}`;
// }
