const asyncHandler = require("express-async-handler");

/**
 * @description Get all contacts
 * @route Get /api/contacts
 * @access public
 */

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

/**
 * @description Create new contacts
 * @route POST /api/contacts
 * @access public
 */

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;

  if (!name || email || phone) {
    res.status(400);
    throw new Error("name email or phone is missing");
  }
  res.status(201).json({ message: "create contacts" });
});

/**
 * @description Create new contacts
 * @route GET /api/contacts/:id
 * @access public
 */

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get individual contact ${req.params.id}` });
});
/**
 * @description update  contacts
 * @route PUT /api/contacts/:id
 * @access public
 */

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
});
/**
 * @description Delete  contacts
 * @route DELETE /api/contacts/:id
 * @access public
 */

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
});
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
