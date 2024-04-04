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
