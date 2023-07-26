'use client'
import { useState } from "react";
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PaginationSWR = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const { data: comments } = useSWR(
        `https://jsonplaceholder.typicode.com/comments?_page=${pageIndex}&_limit=5`,
        fetcher
    );




    return (
        <>

            {comments ? (
                comments.map((comment: any) => (
                    <div key={comment.id}>
                        <h2 className="text-2xl">{comment.name}</h2>
                        <p>{comment.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center me-5" onClick={() => setPageIndex((_currentPage) => _currentPage - 1)}>
                Prev
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => setPageIndex((_currentPage) => _currentPage + 1)}>
                Next
            </button>
        </>
    );
};

export default PaginationSWR;