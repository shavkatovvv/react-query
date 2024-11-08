import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useEditUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => request.put(`/todos/${id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};
