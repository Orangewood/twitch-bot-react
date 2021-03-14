import React, { useEffect } from "react";

interface HomeProps {}

export default function Home(props: HomeProps) {

  const urlToken = new URLSearchParams(window.location.href)
  useEffect(() => {
    console.log(urlToken);
  }, []);

  return <div>wat</div>;
}
