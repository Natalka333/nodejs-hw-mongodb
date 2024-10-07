import { ContactsCollection } from "../db/models/contacts.js";

export const getAllContacts = async () => {

    const contacts = await ContactsCollection.find();
    return contacts;
};


export const getContactsById = async (contactId) => {
    const contacts = await ContactsCollection.findById(contactId);
    return contacts;
};

export const addNewContact = async (payload) => {
    const contact = await ContactsCollection.create(payload);
    return contact;
};

export const deleteContact = async (contactId) => {
    const contact = await ContactsCollection.findOneAndDelete({
        _id: contactId,
    });
    return contact;

};




export const updateContact = async (contactId, payload) => {
    const rawResult = await ContactsCollection.findOneAndUpdate(
        { _id: contactId },
        payload,
    );


    if (!rawResult || !rawResult.value) return null;

    return {
        contact: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),

    };

};