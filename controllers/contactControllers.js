/**
 * @description Get all contacts
 * @route Get /api/contacts
 * @access public
 */

const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

/**
 * @description Create new contacts
 * @route POST /api/contacts
 * @access public
 */

const createContact = (req, res) => {
  res.status(201).json({ message: "create contacts" });
};

/**
 * @description Create new contacts
 * @route GET /api/contacts/:id
 * @access public
 */

const getContact = (req, res) => {
  res.status(200).json({ message: "get individual contact" });
};
/**
 * @description update  contacts
 * @route PUT /api/contacts/:id
 * @access public
 */

const updateContact = (req, res) => {
  res.status(200).json({ message: "update contacts" });
};
/**
 * @description Delete  contacts
 * @route DELETE /api/contacts/:id
 * @access public
 */

const deleteContact = (req, res) => {
  res.status(200).json({ message: "delete contacts" });
};
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
