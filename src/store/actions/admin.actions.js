import { ADMIN } from '../types';

const isAdmin = (admin) => ({
    type: ADMIN,
    payload: admin
});


export {isAdmin};
