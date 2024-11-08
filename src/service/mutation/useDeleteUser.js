import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useDeleteUser = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (id) =>
            request.delete(`/todos/${id}`).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["todos"]);
        },
    });
};
