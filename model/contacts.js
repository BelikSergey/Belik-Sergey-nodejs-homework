const contacts = require('../model/schemas/contact')

const listContacts = async (userId, query) => {
  const results = await contacts.find({ owner: userId }).populate({
    path: 'owner',
    select: 'subscription email',
  })
  return results

}

const getContactById = async (userId, id) => {
  const result = await contacts.findOne({ _id: id, owner: userId })
  return result
}

const removeContact = async (userId, id) => {
  const result = await contacts.findByIdAndRemove({ _id: id, owner: userId })
  return result
   
}



const addContact = async (userId, body) => {
  const result = await contacts.create({ ...body, owner: userId})
    return result
}

const updateContact = async (userId, id, body) => {
  const result = await contacts.findByIdAndUpdate({ _id: id, owner: userId }, { ...body}, {new: true})
  return result
}

 module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} 
