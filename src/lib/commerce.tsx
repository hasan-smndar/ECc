import Commerce from "@chec/commerce.js";
const PUBLIC_API: string = process.env.REACT_APP_CHEC_PUBLIC_KEY!;
export const commerce = new Commerce(PUBLIC_API, true);
