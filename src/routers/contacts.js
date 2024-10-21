import { Router } from "express";
import { addNewContactController, deleteContactController, getContactByIdController, getContactsController, patchContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { isValidId } from "../middlewares/isValidId.js";


const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactByIdController));
router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(addNewContactController));
router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));
router.patch('/contacts/:contactId', validateBody(createContactSchema), isValidId, ctrlWrapper(patchContactController));

// router.put('/contact/:contactId', ctrlWrapper(upsertContactController));


export default router;
