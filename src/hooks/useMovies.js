import {useContext} from 'react';
import {Context} from '../context';

const useMovies = () => {
    return useContext(Context);
}

export default useMovies;