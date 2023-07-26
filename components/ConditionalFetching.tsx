'use client'
import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ConditionalFetching = () => {
    const {
        data: comments,
        isLoading,
        error,
    } = useSWR(
        "https://jsonplaceholder.typicode.com/comments?_limit=6",
        fetcher
    );

    if (error) {
        return <p>Failed to fetch</p>;
    }

    if (isLoading) {
        return <p>Loading comments...</p>;
    }


    // using a ternary operator directly
    // const {
    //     data: comments,
    //     isLoading,
    //     error,
    // } = useSWR(
    //     () =>
    //         posts.length >= 1
    //             ? `https://jsonplaceholder.typicode.com/posts/${posts[12].id}/comments?_limit=6`
    //             : null,
    //     fetcher
    // );

    // if (error) return <p>Failed to load the comments</p>;

    // // using a function
    // const { data: comments } = useSWR(
    //     () =>
    //         posts.length >= 1
    //             ? `https://jsonplaceholder.typicode.com/posts/${posts[12].id}/comments?_limit=6`
    //             : null,
    //     fetcher
    // );
    return (
        <>
            <header className='p-7 text-center bg-primary shadow-md'>
                <h1 className='text-secondary font-bold text-xl'>Comments App</h1>
            </header>
            <main className='max-w-[1100px] mx-auto mt-10 pb-10 px-4'>
                {isLoading ? (
                    <p className='text-secondary'>Loading comments</p>
                ) : (
                    <ul className='grid grid-cols-3 gap-x-3 gap-y-3'>
                        {comments?.map((comment: any, index: number) => (
                            <li className='bg-primary p-10 rounded-lg shadow-md' key={index}>
                                <span className='block mb-4 font-bold text-lg text-secondary capitalize'>
                                    {comment.name}
                                </span>
                                <span className='text-secondary'>{comment.body}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
};

export default ConditionalFetching;