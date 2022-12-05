import {InitialUsersReducerType} from './Types';
import UsersReducer from './users-Reducer';

let initialState: InitialUsersReducerType;
beforeEach(() => {
    initialState = {
        UsersData: [
            {
                name: 'string',
                id: 2,
                uniqueUrlName: 'any',
                photos: {small: '', large: ''},
                status: 'any',
                followed: false
            }, {
                name: 'string',
                id: 4,
                uniqueUrlName: 'any',
                photos: {small: '', large: ''},
                status: 'any',
                followed: false
            }, {
                name: 'string',
                id: 6,
                uniqueUrlName: 'any',
                photos: {small: '', large: ''},
                status: 'any',
                followed: true
            }],
        isFetching: true,
        totalUsersCount: 10,
        pageSize: 10,
        currentPage: 1
    };
});

test('users-Reducer-test should work correct', () => {

        let resultState1 = UsersReducer(initialState, {
            type: 'FOLLOW-USER',
            userId: 2
        });

        let resultState2 = UsersReducer(initialState, {
            type: 'FOLLOW-USER',
            userId: 6
        });
        let resultState3 = UsersReducer(initialState, {
            type: 'UNFOLLOW-USER',
            userId: 6
        });
        let resultTotalUserState = UsersReducer(initialState, {
            type: 'SET-TOTAL-USER-COUNT',
            totalUsersCount: 5
        });
        let resultCurrentPageState = UsersReducer(initialState, {
            type: 'SET-USER-CURRENT-PAGE',
            currentPage: 27
        });
        let resultFetchingState = UsersReducer(initialState, {
            type: 'SET-FETCHING-PRELOADER',
            isFetching: true
        });

        expect(resultState1.UsersData[0].followed).toBe(true);
        expect(resultState1.UsersData[1].followed).toBe(false);
        expect(resultState2.UsersData[2].followed).toBe(true);
        expect(resultState3.UsersData[2].followed).toBe(false);
        expect(resultTotalUserState.totalUsersCount).toBe(5);
        expect(resultCurrentPageState.currentPage).toBe(27);
        expect(resultFetchingState.isFetching).toBe(true);
        expect(resultFetchingState).toEqual({
            UsersData: [
                {
                    name: 'string',
                    id: 2,
                    uniqueUrlName: 'any',
                    photos: {small: '', large: ''},
                    status: 'any',
                    followed: false
                }, {
                    name: 'string',
                    id: 4,
                    uniqueUrlName: 'any',
                    photos: {small: '', large: ''},
                    status: 'any',
                    followed: false
                }, {
                    name: 'string',
                    id: 6,
                    uniqueUrlName: 'any',
                    photos: {small: '', large: ''},
                    status: 'any',
                    followed: true
                }],
            isFetching: true,
            totalUsersCount: 10,
            pageSize: 10,
            currentPage: 1
        });
    }
);

export {};
