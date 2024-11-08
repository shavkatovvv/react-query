import { request } from "../../config/request";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export const UseSingleUser = (id) => {
    const client = useQueryClient();
    return useQuery({
        queryKey: [`single-page`],
        queryFn: () => request.get(`/todos/${id}`).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["todos"]);
        },
    });
};
