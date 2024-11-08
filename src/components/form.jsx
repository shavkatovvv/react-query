import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ userSubmit }) => {
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data) => {
        userSubmit(data);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[20px]">
                <div className="mt-[20px] w-[700px]">
                    <input
                        className="p-[20px] w-[500px] bg-gray-500 rounded-[20px] text-white "
                        type="text"
                        {...register("title")}
                        placeholder="Title"
                    />
                </div>
                <div className="mt-[20px] mb-[20px]">
                    <input
                        className="p-[20px] w-[500px] bg-gray-500 rounded-[20px] text-white "
                        type="text"
                        {...register("description")}
                        placeholder="Description"
                    />
                </div>
                <button
                    type="submit"
                    className="p-[10px] bg-green-500 rounded-[10px] text-white "
                >
                    Send
                </button>
            </form>
        </div>
    );
};
