import { Router } from "express";

import customerRoutes from "./routes/customerRoutes";
import productRoutes from "./routes/productRoutes";
import partnerRoutes from "./routes/partnerRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import translationRoutes from "./routes/translationRoutes";
import vocabulariesRoutes from "./routes/vocabularies";

/**
 * Contains all API routes for the application.
 */
const router = Router();

router.use("/v1/customers", customerRoutes);
router.use("/v1/products", productRoutes);
router.use("/v1/partners", partnerRoutes);
router.use("/v1/payments", paymentRoutes);
router.use("/v1/translate", translationRoutes);
router.use("/v1/vocabularies", vocabulariesRoutes);

export default router;
