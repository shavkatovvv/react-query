import { useMutation } from "@tanstack/react-query";
import React from "react";
import { request } from "../../config/request";
import { data } from "autoprefixer";
import { client } from "../../client/client";

export const useCreateUsers = () => {
    return useMutation({
        mutationFn: (data) =>
            request.post("/todos", data).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["todos"]);
        },
    });
};
