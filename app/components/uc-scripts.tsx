"use client";

import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

export const UCScripts = () => {
  const searchParams = useSearchParams();
  const localhostParam = searchParams.get("localhost");
  const isLocalhost = localhostParam === "true";

  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  /* 
    Interestingly, customers who use Next.js cannot have an async static loader,
    because the framework will inject this tag before sync ones for some reason.  
  */

  return (
    <>
      {/* eslint-disable-next-line */}
      <script
        src={
          isLocalhost
            ? "http://localhost:4445/autoblocker.js"
            : "https://web.cmp.usercentrics-sandbox.eu/ui/modules/autoblocker.js"
        }
      ></script>
      {/* eslint-disable-next-line */}
      <script
        src={
          isLocalhost
            ? "http://localhost:1111/loader.js"
            : "https://web.cmp.usercentrics-sandbox.eu/ui/loader.js"
        }
        data-settings-id="H8UPjXU8uQQ7GP"
        id="usercentrics-cmp"
      ></script>
    </>
  );
};
