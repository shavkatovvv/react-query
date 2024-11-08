import React from "react";
import { usegetUsers } from "../service/query/usegetUsers";
import { useDeleteUser } from "../service/mutation/useDeleteUser";
import { useNavigate } from "react-router-dom";
import { useEditUser } from "../service/mutation/useEditUser";

export const Users = () => {
    const { data } = usegetUsers();
    const { mutate: deleteUser } = useDeleteUser();
    const { mutate: editUser } = useEditUser();
    const navigate = useNavigate();

    const DELETE = (id) => {
        deleteUser(id);
    };

    const Edit = (item) => {
        const newTitle = prompt("Enter new title");
        const newDesc = prompt("Enter new description");
        if (newTitle && newDesc) {
            editUser({
                id: item.id,
                data: { title: newTitle, description: newDesc },
            });
        }
    };

    return (
        <div className="container">
            {data?.map((item) => (
                <div
                    key={item.id}
                    className="w-[400px] rounded-[20px] bg-teal-500 p-[30px] mb-[20px] mt-[20px]"
                >
                    <h1 className="text-[20px] font-semibold text-white">
                        {item.title}
                    </h1>
                    <h3 className="text-[20px] font-semibold text-white">
                        {item.description}
                    </h3>
                    <button
                        onClick={() => DELETE(item.id)}
                        className="bg-red-500 text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px]"
                    >
                        DELETE
                    </button>
                    <button
                        onClick={() => navigate(`/user-detail/${item.id}`)}
                        className="bg-green-500 text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px] ml-[10px]"
                    >
                        SHOW
                    </button>
                    <button
                        onClick={() => Edit(item)}
                        className="bg-black text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px] ml-[10px]"
                    >
                        EDIT
                    </button>
                </div>
            ))}
        </div>
    );
};
