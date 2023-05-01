const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

/**
 * @description Get all contacts
 * @route Get /api/contacts
 * @access public
 */

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

/**
 * @description Create new contacts
 * @route POST /api/contacts
 * @access public
 */

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("name email or phone is missing");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

/**
 * @description Create new contacts
 * @route GET /api/contacts/:id
 * @access public
 */

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});
/**
 * @description update  contacts
 * @route PUT /api/contacts/:id
 * @access public
 */

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});
/**
 * @description Delete  contacts
 * @route DELETE /api/contacts/:id
 * @access public
 */

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await Contact.deleteOne();
  res.status(200).json(contact);
});
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
