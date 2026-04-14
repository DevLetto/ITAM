import express from 'express';
import { registerAssetController as register} from '../controller/registerAssetController.js';

//Creating a router for asset registration
const router = express.Router();

router.post('/', register);

export default router;

