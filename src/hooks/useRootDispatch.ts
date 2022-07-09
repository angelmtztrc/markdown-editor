import { useDispatch } from 'react-redux';

import { RootDispatch } from '@store';

const useRootDispatch: () => RootDispatch = useDispatch;

export default useRootDispatch;
