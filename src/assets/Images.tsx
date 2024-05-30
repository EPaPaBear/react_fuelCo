const makeURL = (location: string) => {
  return new URL(location, import.meta.url).href;
};

const IMAGES = {
  PH_VISUAL_HEADLINE: makeURL("/images/PH_Visual_Headline.png"),
  PH_VISUAL_PRODUCTINFO: makeURL("/images/PH_Visual_ProductInfo.png"),
  IMG_1: makeURL("/images/img_1.png"),
  IMG_2: makeURL("/images/img_2.png"),
  IMG_3: makeURL("/images/img_3.png"),
  IMG_4: makeURL("/images/img_4.png"),
  IMG_5: makeURL("/images/img_5.png"),
  IMG_6: makeURL("/images/img_6.png"),
  IMG_7: makeURL("/images/img_7.png"),
  IMG_8: makeURL("/images/img_8.png"),
  IMG_9: makeURL("/images/img_9.png"),
  IMG_10: makeURL("/images/img_10.png"),
  SMARTLINE_L_HOSE: makeURL(
    "/images/Smarline L-Hose-Photoroom.png-Photoroom.png"
  ),
  SMARTLINE_H: makeURL("/images/Smartline-H-PNG.webp"),
  SMARTLINE_H_SCREEN: makeURL("/images/smartlineH/Smartline-H-Screen.webp"),
  SMARTLINE_H_DESIGN: makeURL("/images/smartlineH/Smartline-H-100-Design.webp"),
  SMARTLINE_H_TERMINAL: makeURL(
    "/images/smartlineH/Smartline-H-X-Payment.webp"
  ),
  SMARTLINE_R: makeURL("/images/Smartline R.png"),
  SMARTLINE_R_SCREEN: makeURL("/images/smartlineR/SmartlineR_SalesScreen.png"),
  SMARTLINE_R_DESIGN: makeURL("/images/smartlineR/SmartlineR_Design.png"),
  SMARTLINE_R_TERMINAL: makeURL(
    "/images/smartlineR/SmartlineR_PayTerminal.png"
  ),
  SMARTLINE_C: makeURL("/images/Smartline-C-PNG.webp"),
  SMARTLINE_C_SCREEN: makeURL("/images/smartlineC/Smartline-C-Screen.webp"),
  SMARTLINE_C_DESIGN: makeURL("/images/smartlineC/Smartline-C-Design.webp"),
  SMARTLINE_C_TERMINAL: makeURL("/images/smartlineC/Smartline-C-Payment.webp"),
  SMARTLINE_L: makeURL("/images/Smartline-L-PNG.webp"),
  SMARTLINE_L_SCREEN: makeURL("/images/smartlineL/Smartline-L-Screen.webp"),
  SMARTLINE_L_DESIGN: makeURL(
    "/images/smartlineL/Smartline-L-Design-Main.webp"
  ),
  SMARTLINE_L_TERMINAL: makeURL("/images/smartlineL/Smartline-L-Screen.webp"),
  SMARTLINE_LX: makeURL("/images/Smartline-L-X-PNG.webp"),
  SMARTLINE_LX_SCREEN: makeURL("/images/smartlineLX/Smartline-L-X-Screen.webp"),
  SMARTLINE_LX_DESIGN: makeURL("/images/smartlineLX/Smartline-L-X-Design.webp"),
  SMARTLINE_LX_TERMINAL: makeURL(
    "/images/smartlineLX/Smartline-L-X-Screen.webp"
  ),
};

export default IMAGES;
