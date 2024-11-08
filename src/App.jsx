import React from "react";
import { Users } from "./components/users";
import { Form } from "./components/form";
import { usegetUsers } from "./service/query/usegetUsers";
import { useCreateUsers } from "./service/mutation/useCreateUsers";
import { Route, Routes } from "react-router-dom";
import { UserDetail } from "./components/user-detail";

function App() {
    const { data, isLoading } = usegetUsers();
    const { mutate } = useCreateUsers();

    const submit = (data) => {
        mutate(data);
    };
    return (
        <>
            <Routes>
                <Route path="user-detail/:id" element={<UserDetail />} />
            </Routes>
            <Form userSubmit={submit} />
            <Users />
        </>
    );
}

export default App;
