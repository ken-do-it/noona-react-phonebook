import React from 'react';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

const ContactList = () => {
    const contactList = useSelector((state) => state.contactList || []);
    const searchTerm = useSelector((state) => state.searchTerm); // 검색어 가져오기

    // 검색어에 따라 연락처 리스트 필터링
    const filteredContacts = contactList.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <SearchBox />
            {searchTerm && filteredContacts.length === 0 ? ( // 검색어가 있고 필터링된 결과가 없을 때만 메시지 표시
                <p>검색 결과가 없습니다.</p>
            ) : (
                filteredContacts.map((item, index) => (
                    <ContactItem key={index} item={item} />
                ))
            )}
        </div>
    );
};

export default ContactList;
