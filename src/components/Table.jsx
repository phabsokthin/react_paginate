import React from 'react'

export default function Table({ users, searchTerm }) {
    return (


        <div class="relative overflow-x-auto mt-2">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs bg-gray-300 py-10 text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Body
                        </th>
                    </tr>
                </thead>
                <tbody>



                    {users.length > 0 ? (

                        users.map((user) => {
                            return (
                                <tr key={user.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4">
                                        {user.id}
                                    </td>
                                    <td class="px-6 py-4">
                                        <p className='line-clamp-1'>{user.name}</p>
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td class="px-6 py-4 ">
                                        <p className='line-clamp-1'>{user.body}</p>
                                    </td>

                                </tr>
                            )
                        })

                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-10 font-bold">
                                មិនមាន​ទិន្ន័យឈ្មោះ {searchTerm}
                            </td>
                        </tr>
                    )

                    }

                </tbody>
            </table>
        </div>

    )
}
