import { useMemo, useState } from "react";
import getApi from "./getApi";

export default function useProfilesApi() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useMemo(() => {
    (async () => {
      try {
        const data = await getApi.getProfiles();
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    })();
  }, []);
  return { data, loading };
}
