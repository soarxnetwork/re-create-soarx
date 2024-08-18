import HandleBars from "handlebars";
export const activationTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activation Email</title>
</head>
<body>
    <div style="width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction= column">
        <div style="width: 50%; height: 50%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1>Activate your account {{name}}</h1>
            <p>Click the button below to activate your account</p>
            <a href="{{url}}" style="padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none;">Activate</a>
        </div>
    </div>
`;
export const forgotPasswordTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password Email</title>
</head>
<body>
    <div style="width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction= column">
        <div style="width: 50%; height: 50%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1>Reset your password {{name}}</h1>
            <p>Click the button below to reset your password</p>
            <a href="{{url}}" style="padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none;">Reset</a>
        </div>
    </div>
`;

export const defaultRegistrationTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Registration Confirmation</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0px 20px;
      }
      .title {
        font-weight: 500;
        color: rgb(177, 175, 175);
      }
      .date {
        height: 45px;
        width: 40px;
        border: 1px solid #b0aeae;
        border-radius: 5px;
        text-align: center;
      }
      .month {
        background-color: #dbdbdb;
        height: 20px;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        font-weight: 600;
      }
      .calender {
        display: flex;
      }
      .details {
        border-top: #b0aeae 1px solid;
        padding-top: 20px;
        margin-top: 20px;
        display: flex;
      }
      .event-button {
        margin-top: 30px;
        font-weight: 600;
        padding: 10px 20px;
        color: white;
        background-color: #f41a7b;
        border: none;
        border-radius: 5px;
        text-decoration: none;
      }
      .title-text {
        color: black;
      }
      .description {
        margin-top: 20px;
        border-top: #b0aeae 1px solid;
      }
      .logo {
        width: 70px;
        margin-top: 20px;
      }
        .sub-details {
        margin-left: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
      }
        .link{
          cursor: pointer;
        }
    </style>
  </head>
  <body>
    <div class="">
      <div class="">
        <div>
          <img
            src="https://utfs.io/f/aad5ad0b-3f8b-4181-9556-a186e0f05d56-jh6460.png"
            alt="logo"
            class="logo"
          />
        </div>
        <h2 class="title">
          You have registered for <br /><span class="title-text"
            ><b>{{title}}</b></span
          >
        </h2>
      </div>
      <div class="details">
        <div class="calender">
          <div class="date">
            <div class="month">{{month}}</div>
            {{date}}
          </div>
        </div>
        <div class="sub-details">
          <div>
            <p style="font-size: 20px; font-weight: 600;">{{day}} , {{Full_Month}} {{date}}</p>
            <p style="color:#b0aeae; font-family: 600;">{{start_time}} to {{end_time}} GMT+5:30</p>
          </div>
        </div>
      </div>
      <div class="description">
        <p style="margin-top: 20px">
          Join the SoarX Network for further updates and queries:
        </p>
        <p style="color: #f41a7b">
          https://chat.whatsapp.com/FCwHXkhoOwaJkjlyzRq1RG
        </p>
        <a class="link" href="{{event_page_url}}"><button class="event-button">Event Page</button></a>
      </div>
    </div>
  </body>
</html>
`;

interface SendRegistrationMailProps {
  title: String;
  month: String;
  date: String;
  day: String;
  Full_Month: String;
  start_time: String;
  end_time: String;
  event_page_url: String;
}

export const compileRegistrationTemplate = async (
  data: SendRegistrationMailProps
) => {
  const template = HandleBars.compile(defaultRegistrationTemplate);
  return template({ ...data });
};
