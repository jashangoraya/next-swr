'use client'
import useSWR from 'swr'

// interface Comment {
//     id: number;
//     name: string;
//     email: string;
//     body: string;
// }
const fetcher = (url: string) => fetch(url).then((res) => res.json());


const UseOfSWR = () => {
    const {
        data: comments,
        isLoading,
        error,
    } = useSWR(
        "https://jsonplaceholder.typicode.com/comments?_limit=6",
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
    );

    if (error) {
        return <p>Failed to fetch</p>;
    }

    if (isLoading) {
        return <p>Loading comments...</p>;
    }
    return (
        <div>
            {comments ? (
                comments.map((comment: any) => (
                    <div key={comment.id}>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UseOfSWR;