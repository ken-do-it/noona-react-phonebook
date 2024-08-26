
let initialState ={
    contactList:[],
    searchTerm: '' // 검색어를 관리하는 상태 추가
};


export const setSearchTerm = (term) => ({
    type: "SET_SEARCH_TERM",
    payload: term
});

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contactList: [...state.contactList, {
                    name: payload.name,
                    phoneNumber: payload.phoneNumber
                }]
            };
        case "SET_SEARCH_TERM": // 검색어 상태를 업데이트하는 액션 처리
            return {
                ...state,
                searchTerm: payload
            };
        default:
            return state;
    }
};

export default reducer