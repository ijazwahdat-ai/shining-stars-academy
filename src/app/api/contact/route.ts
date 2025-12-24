import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // فعلاً اطلاعات را فقط در کنسول سرور چاپ می‌کنیم
    // در آینده می‌توانید اینجا کد ارسال ایمیل را قرار دهید
    console.log('Contact Form Submission:', body);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}