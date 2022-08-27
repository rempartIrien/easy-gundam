import type { ReactElement } from "react";
import { useContext, useEffect } from "react";

import ClientStyleContext from "./client.context";

export function Styles(): ReactElement {
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // reset cache to re-apply global styles
    clientStyleData.reset();
  }, [clientStyleData]);

  return (
    <style
      id="stitches"
      // eslint-disable-next-line @typescript-eslint/naming-convention
      dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
      suppressHydrationWarning
    />
  );
}
