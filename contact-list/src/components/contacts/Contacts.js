import React, { useEffect } from "react";
import Contact from "./Contact";
import { fetchData } from "../action";
import { connect } from "react-redux";

const Contacts = ({ contactList, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(contactList);
  

  return (
    <div>
      <h1 className="display-4 mb-2">
        <span className="text-denager">Contact </span>List
      </h1>
      {Array.from(contactList) &&
        Array.from(contactList).map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            id={contact.id}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.contacts)
  return {
    contactList: state.contacts
  };
};

export default connect(mapStateToProps, { fetchData })(Contacts);
