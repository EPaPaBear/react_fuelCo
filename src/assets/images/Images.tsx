const makeURL = (location: string) => {
  return new URL(location, import.meta.url).href;
};

const IMAGES = {
  PH_VISUAL_HEADLINE: makeURL("./PH_Visual_Headline.png"),
  PH_VISUAL_PRODUCTINFO: makeURL("./PH_Visual_ProductInfo.png"),
  IMG_1: makeURL("./img_1.png"),
  IMG_2: makeURL("./img_2.png"),
  IMG_3: makeURL("./img_3.png"),
  IMG_4: makeURL("./img_4.png"),
  IMG_5: makeURL("./img_5.png"),
  IMG_6: makeURL("./img_6.png"),
  IMG_7: makeURL("./img_7.png"),
  IMG_8: makeURL("./img_8.png"),
  IMG_9: makeURL("./img_9.png"),
  IMG_10: makeURL("./img_10.png"),
  SMARTLINE_L_HOSE: makeURL("./Smarline L-Hose-Photoroom.png-Photoroom.png"),
  SMARTLINE_H: makeURL("./Smartline-H-PNG.webp"),
  SMARTLINE_H_SCREEN: makeURL("./smartlineH/Smartline-H-Screen.webp"),
  SMARTLINE_H_DESIGN: makeURL("./smartlineH/Smartline-H-100-Design.webp"),
  SMARTLINE_H_TERMINAL: makeURL("./smartlineH/Smartline-H-X-Payment.webp"),
  SMARTLINE_R: makeURL("./Smartline R.png"),
  SMARTLINE_R_SCREEN: makeURL("./smartlineR/SmartlineR_SalesScreen.png"),
  SMARTLINE_R_DESIGN: makeURL("./smartlineR/SmartlineR_Design.png"),
  SMARTLINE_R_TERMINAL: makeURL("./smartlineR/SmartlineR_PayTerminal.png"),
  SMARTLINE_C: makeURL("./Smartline-C-PNG.webp"),
  SMARTLINE_C_SCREEN: makeURL("./smartlineC/Smartline-C-Screen.webp"),
  SMARTLINE_C_DESIGN: makeURL("./smartlineC/Smartline-C-Design.webp"),
  SMARTLINE_C_TERMINAL: makeURL("./smartlineC/Smartline-C-Payment.webp"),
  SMARTLINE_L: makeURL("./Smartline-L-PNG.webp"),
  SMARTLINE_L_SCREEN: makeURL("./smartlineL/Smartline-L-Screen.webp"),
  SMARTLINE_L_DESIGN: makeURL("./smartlineL/Smartline-L-Design-Main.webp"),
  SMARTLINE_L_TERMINAL: makeURL("./smartlineL/Smartline-L-Screen.webp"),
  SMARTLINE_LX: makeURL("./Smartline-L-X-PNG.webp"),
  SMARTLINE_LX_SCREEN: makeURL("./smartlineLX/Smartline-L-X-Screen.webp"),
  SMARTLINE_LX_DESIGN: makeURL("./smartlineLX/Smartline-L-X-Design.webp"),
  SMARTLINE_LX_TERMINAL: makeURL("./smartlineLX/Smartline-L-X-Screen.webp"),
};

export default IMAGES;
