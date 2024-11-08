import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const usegetUsers = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: () => request.get("/todos").then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["todos"]);
        },
    });
};
