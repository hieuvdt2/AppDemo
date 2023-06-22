import * as yup from "yup";

export const ValidSetting = yup
  .object({
    Title: yup.string().required("Không được để trống"),
    Email: yup
      .string()
      .required("Không được để trống email")
      .email("Email không hợp lệ")
      .matches(/^(?!.*@[^,]*,)/),
    Bg: yup.string().required("Vui lòng chọn màu"),
    ActiveDate: yup.string().required("Vui lòng chọn thời gian"),
  })
  .required();
