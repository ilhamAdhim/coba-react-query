import React, { useEffect } from 'react';
import { QueryCache, QueryClient, useQuery } from 'react-query';
import { getData } from '../actions/DataCRUD';

const Todos = props => {
    const query = useQuery('todo', getData)

    return (
        <ul>
            {query.isLoading ? "Loading data...." : query.data?.data?.map(item => <li> {item.title} </li>)}
        </ul>
    );
};


export default Todos;