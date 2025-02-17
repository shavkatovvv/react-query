import { QueryClient } from "@tanstack/react-query";

export const client = new QueryClient({
    defaultOptions: { queries: { refetchInterval: false } },
});
