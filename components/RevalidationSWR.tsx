'use client'
import useSWR from 'swr'

const RevalidationSWR = () => {
    const { data: user, mutate } = useSWR("/api/user");

    // const updateName = async () => {
    //     const newName = user.name.toUpperCase();
    //     await updateNameInDB(newName);
    //     mutate();
    // };
    return (
        <div>
            <p>{user.name}</p>
            {/* <button onClick={updateName}>Update name</button> */}
        </div>
    );
};

export default RevalidationSWR;