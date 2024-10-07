import { Router } from "express";
import { addNewContactController, deleteContactController, getContactByIdController, getContactsController, patchContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contacts', ctrlWrapper(addNewContactController));
router.delete('/contact/:contactId', ctrlWrapper(deleteContactController));
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

// router.put('/contact/:contactId', ctrlWrapper(upsertContactController));


export default router;
