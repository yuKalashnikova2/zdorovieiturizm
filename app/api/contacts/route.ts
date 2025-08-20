import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASS_USER,
    },
  });

  const mail = {
    from: process.env.EMAIL_USER,
    to: ["narrissovannaya@mail.ru"],
    subject: "Запись на консультацию с сайта zdorovyeiturizm.ru",
    text: `Имя: ${name} \nEmail: ${email} \nТелефон: ${phone}`,
  };

  try {
    await transporter.sendMail(mail);
    return NextResponse.json({ message: "Письмо успешно отправлено!" });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Ошибка при отправке письма на сервере",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "Неизвестная ошибка", error: String(error) },
      { status: 500 }
    );
  }
}
