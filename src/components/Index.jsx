import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';
import Pagination from './Pagination';
import SelectLimit from './SelectLimit';

export default function Index() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPage, setTotalPage] = useState(1);
    const [search, setSearch] = useState('');

    const fetchAllUsers = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/comments");

            const filteredUsers = search
                ? res.data.filter(user =>
                    user.name.toLowerCase().includes(search.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.toLowerCase()) ||
                    user.body.toLowerCase().includes(search.toLowerCase())
                )
                : res.data;

            // Paginate the filtered users
            const start = (page - 1) * limit;
            const paginatedUsers = filteredUsers.slice(start, start + limit);

            setUsers(paginatedUsers);
            setTotalPage(Math.ceil(filteredUsers.length / limit));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, [page, limit, search]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
        setPage(1);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    return (
        <div className='container mx-auto pt-10'>
            <div className='flex justify-between items-center'>
                <SelectLimit onLimitChange={handleLimitChange} />
                <div>
                    <input
                        type='text'
                        className='border-2 p-2 w-96'
                        placeholder='ស្វែងរក....'
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div>
                <Table users={users} searchTerm={search} />
            </div>
            <div className='flex justify-end'>
                <Pagination
                    totalPage={totalPage}
                    page={page}
                    siblings={1}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}
