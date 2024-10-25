import { Router } from "express";
import {
    addNewContactController,
    deleteContactController,
    getContactByIdController,
    getContactsController,
    patchContactController
} from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from '../middlewares/validateBody.js';
import {
    createContactSchema,
    patchContactSchema
} from '../validation/contacts.js';
import { isValidId } from "../middlewares/isValidId.js";


const router = Router();

router.get('/', ctrlWrapper(getContactsController));
router.get('/:contactId',
    isValidId,
    ctrlWrapper(getContactByIdController)
);
router.post('/register',
    validateBody(createContactSchema),
    ctrlWrapper(addNewContactController)
);
router.delete('/:contactId',
    isValidId,
    ctrlWrapper(deleteContactController)
);
router.patch('/:contactId',
    validateBody(patchContactSchema),
    isValidId,
    ctrlWrapper(patchContactController)
);

// router.put('/contact/:contactId', ctrlWrapper(upsertContactController));


export default router;
