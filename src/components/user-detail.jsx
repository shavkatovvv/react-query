import React from "react";
import { UseSingleUser } from "../service/query/useSingleUser";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
    const { id } = useParams();
    const { data } = UseSingleUser(id);
    return (
        <div>
            <h1>{data?.title}</h1>
            <h2>{data?.description}</h2>
        </div>
    );
};
