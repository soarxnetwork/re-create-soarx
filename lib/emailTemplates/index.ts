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
<div>
  <div><!-- [if !mso]><!--> <!--<![endif]--></div>
</div>
<style><![CDATA[
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    ]]></style>
<div>
  <div><!-- [if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]--> <!-- [if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]--> <!-- [if !mso]><!--></div>
</div>
<style><![CDATA[
          @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
        ]]></style>
<div>
  <div><!--<![endif]--></div>
</div>
<style><![CDATA[
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    ]]></style>
<div>
  <div></div>
</div>
<style><![CDATA[
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
    ]]></style>
<div>
  <div></div>
</div>
<style><![CDATA[
    ]]></style>
<div>
  <div></div>
</div>
<style><![CDATA[
    h1 {
            font-size: 24px;
            line-height: 32px;
            margin-top: 32px;
            margin-bottom: 28px;
          }
          h2 {
            font-size: 20px;
            line-height: 28px;
            margin-top: 24px;
            margin-bottom: 20px;
          }
          p {
            margin-top: 0;
            margin-bottom: 16px;
          }
          p.small {
            font-size: 14px;
            margin-bottom: 8px;
          }
          hr {
            border-top: 1px solid #ebeced;
          }
          blockquote {
            border-left: 2px solid #ebeced;
            padding-left: 1rem;
            margin-left: 0;
          }
          a {
            color: #af5800;
            text-decoration: none !important;
          }
          .mirror-content a, a.cta-link {
            color: #af5800 !important;
            text-decoration: none !important;
          }
          .mirror-content li p {
            margin: 4px 0;
          }
          .mirror-content a.btn {
            margin-top: 0.5rem;
            color: white !important;
          }
          .mirror-content pre {
            /* We need to wrap long lines, otherwise the email will scroll horizontally
               on some clients like Superhuman */
            white-space: pre-wrap !important;
            padding: 1rem;
            border-radius: 4px;
            background-color: #f4f5f6 !important;
          }
          table.time-pill {
            background-color: #f4f5f6;
            border-radius: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            width: 30%;
          }
          td.time-pill-content {
            text-align: center;
            color: #737577;
            min-width: 130px;
          }
          td.time-pill-content.date {
            font-size: 14px;
            font-weight: 500;
            padding-top: 6px;
          }
          td.time-pill-content.time {
            font-size: 12px;
            padding-bottom: 6px;
          }
          @media all and (max-width: 400px) {
            table.time-pill {
              width: 40%;
            }
          }
          table.survey-pill {
            background-color: #f4f5f6;
            border-radius: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            width: 20%;
            min-width: 60px;
          }
          td.survey-pill-content {
            text-align: center;
            padding: 12px 8px;
          }
          td.survey-pill-content a {
            padding: 16px 8px;
          }
          td.survey-pill-content.emoji {
            font-size: 28px;
          }
          .calendar-red {
            color: #d86156;
          }
          .col-50 {
            width: 50% !important;
            max-width: 50%;
          }
    ]]></style>
<div>
  <div><!-- [if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin: 0px auto; max-width: 600px;">
      <table style="width: 100%;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
          <tr>
            <td style="direction: ltr; font-size: 0px; padding: 16px; text-align: center;"><!-- [if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:568px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                <table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td style="vertical-align: top; padding: 0px;">
                        <table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; word-break: break-word;" align="left">
                                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; text-align: left; color: #131517;">
                                  <table style="padding-bottom: 4px; display: block;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="left">
                                    <tbody>
                                      <tr>
                                        <td style="vertical-align: middle;">
                                          <a target="_blank" style="display: flex; text-decoration: none;" href="https://lu.ma/u/usr-Z3O3PbajvtSWrSA" rel="noopener">
                                            <img style="width: 18px; height: 18px; border-radius: 18px;" src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=18,height=18/avatars/72/2dba67f7-d5d4-43f2-966e-feaeac7761fd" width="18" height="18">
                                          </a>
                                        </td>
                                        <td style="vertical-align: middle; padding-left: 8px;">
                                          <a target="_blank" style="color: #737577 !important; font-size: 16px !important; line-height: 1.5 !important; text-decoration: none;" href="https://lu.ma/u/usr-Z3O3PbajvtSWrSA" rel="noopener">SoarX</a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; word-break: break-word;" align="left">
                                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; text-align: left; color: #131517;">
                                  <div style="font-weight: normal; color: #b3b5b7;">You have registered for</div>
                                  <h1 style="margin-top: 0; margin-bottom: 4px; font-size: 24px; line-height: 32px;">
                                    <strong>{{title}}</strong>
                                  </h1>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; padding-top: 16px; padding-bottom: 16px; word-break: break-word;" align="center">
                                <p style="border-top: solid 1px #ebeced; font-size: 1px; margin: 0px auto; width: 100%;">&nbsp;</p>
<!-- [if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #ebeced;font-size:1px;margin:0px auto;width:568px;" role="presentation" width="568px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; word-break: break-word;" align="left">
                                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; text-align: left; color: #131517;">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td style="padding-bottom: 8px;">
                                          <table border="0">
                                            <tbody>
                                              <tr>
                                                <td style="vertical-align: middle; width: 40px; height: 40px; padding: 0;">
                                                  <table style="border-spacing: 0; border-collapse: separate;" border="0" width="40" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                      <tr>
                                                        <td style="padding: 0; margin: 0; background-color: #eceded !important; border: 1px solid #eceded; font-size: 8px !important; line-height: 2 !important; border-top-right-radius: 8px; border-top-left-radius: 8px;" align="center" valign="middle">
                                                          <span style="color: #737577 !important; font-size: 8px !important; line-height: 2 !important; font-weight: 500;">{{month}}</span>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td style="padding: 0; margin: 0; background-color: #ffffff; border: 1px solid #eceded; border-bottom-right-radius: 8px; border-bottom-left-radius: 8px; font-size: 16 !important; line-height: 1.5 !important;" align="center" valign="top">
                                                          <span style="font-size: 16 !important; line-height: 1.5 !important; font-weight: 500; color: #737577;">{{date}}</span>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                                <td style="vertical-align: middle; padding-left: 12px;">
                                                  <div>
                                                    <div style="font-size: 16px; color: #131517; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{day}}, {{Full_Month}} {{date}}</div>
                                                    <div style="font-size: 14px; color: #737577; font-weight: 400; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{start_time}} - {{end_time}} GMT+5:30</div>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <table border="0">
                                            <tbody>
                                              <tr>
                                                <td style="vertical-align: middle; width: 40px; height: 40px; padding: 0;">
                                                  <table style="padding: 0; border-collapse: separate; border-spacing: 0;" border="0">
                                                    <tbody>
                                                      <tr>
                                                        <td style="border: 1px solid #eceded; vertical-align: middle; width: 40px; height: 40px; border-radius: 8px;" align="center">
                                                          <img style="display: block;" src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=40,height=40/misc/20/04a81bba-a20c-49c2-85bc-568cbcebe1a0" width="20" height="20">
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                                <td style="vertical-align: middle; padding-left: 12px;">
                                                  <div style="font-size: 16px; color: #131517; font-weight: 500;">YouTube</div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; padding-top: 16px; padding-bottom: 16px; word-break: break-word;" align="center">
                                <p style="border-top: solid 1px #ebeced; font-size: 1px; margin: 0px auto; width: 100%;">&nbsp;</p>
<!-- [if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #ebeced;font-size:1px;margin:0px auto;width:568px;" role="presentation" width="568px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; padding-top: 16px; word-break: break-word;" align="left">
                                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; text-align: left; color: #131517;">
                                  <table style="vertical-align: top;" role="presentation" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                      <tr>
                                        <td align="left">
                                          <table style="border-collapse: separate; line-height: 100%;" role="presentation" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                <td style="border: none; border-radius: 8px; cursor: auto; background: #af5800; text-decoration: none; mso-padding-alt: 10px 25px;" role="presentation" align="center" valign="middle" bgcolor="#af5800">
                                                  <a class="link" href="{{event_page_url}}" style="display: inline-block; background-color: #af5800; color: white; font-size: 16px; line-height: 1; margin: 0; text-decoration: none; text-transform: none; border-radius: 8px; font-weight: bold; padding: 12px 24px; mso-padding-alt: 0px;" target="_blank" rel="noopener">Join Event</a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td style="padding-left: 10px;" align="left">&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; padding-top: 24px; word-break: break-word;" align="left">
                                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; text-align: left; color: #131517;">
                                  <table width="100%" cellspacing="5" cellpadding="0">
                                    <colgroup>
                                      <col style="width: 120px;" span="1">
                                    </colgroup>
                                    <tbody>
                                      <tr>
                                        <td valign="top" nowrap="nowrap">Click to Join</td>
                                        <td>
                                          <a class="cta-link" href="https://chat.whatsapp.com/FCwHXkhoOwaJkjlyzRq1RG">https://chat.whatsapp.com/FCwHXkhoOwaJkjlyzRq1RG</a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; padding-top: 32px; padding-bottom: 0px; word-break: break-word;" align="left">
                                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.6; text-align: left; color: #b3b5b7;">Share with friends</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; padding-bottom: 8px; word-break: break-word;" align="left"><!-- [if mso | IE]><table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                
<!-- [if mso | IE]></td><td><![endif]-->
                                <table style="float: none; display: inline-table;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr>
                                      <td style="padding: 12px 16px 12px 0; vertical-align: middle;">
                                        <table style="border-radius: 3px; width: 20px;" role="presentation" border="0" cellspacing="0" cellpadding="0">
                                          <tbody>
                                            <tr>
                                              <td style="font-size: 0; height: 20px; vertical-align: middle; width: 20px;">
                                                <a href="https://x.com/SoarXNetwork" target="_blank" rel="noopener">
                                                  <img style="border-radius: 3px; display: block;" src="https://cdn.lu.ma/email/twitter.png" width="20" height="20">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
<!-- [if mso | IE]></td><td><![endif]-->
                                <table style="float: none; display: inline-table;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr>
                                      <td style="padding: 12px 16px 12px 0; vertical-align: middle;">
                                        <table style="border-radius: 3px; width: 20px;" role="presentation" border="0" cellspacing="0" cellpadding="0">
                                          <tbody>
                                            <tr>
                                              <td style="font-size: 0; height: 20px; vertical-align: middle; width: 20px;">
                                                <a href="https://www.linkedin.com/company/soarxnetwork/" target="_blank" rel="noopener">
                                                  <img style="border-radius: 3px; display: block;" src="https://cdn.lu.ma/email/linkedin.png" width="20" height="20">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
<!-- [if mso | IE]></td><td><![endif]-->
                               <table style="float: none; display: inline-table;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr>
                                      <td style="padding: 12px 16px 12px 0; vertical-align: middle;">
                                        <table style="border-radius: 3px; width: 20px;" role="presentation" border="0" cellspacing="0" cellpadding="0">
                                          <tbody>
                                            <tr>
                                              <td style="font-size: 0; height: 20px; vertical-align: middle; width: 20px;">
                                                <a href="https://chat.whatsapp.com/FCwHXkhoOwaJkjlyzRq1RG" target="_blank" rel="noopener">
                                                  <img style="border-radius: 3px; display: block;" src="https://cdn.lu.ma/email/whatsapp.png" width="20" height="20">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>


                                <table style="float: none; display: inline-table;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="left">
                                  <tbody>
                                    <tr>
                                      <td style="padding: 12px 16px 12px 0; vertical-align: middle;">
                                        <table style="border-radius: 3px; width: 20px;" role="presentation" border="0" cellspacing="0" cellpadding="0">
                                          <tbody>
                                            <tr>
                                              <td style="font-size: 0; height: 20px; vertical-align: middle; width: 20px;">
                                                <a href="https://www.instagram.com/soarxnetwork" target="_blank" rel="noopener">
                                                  <img style="border-radius: 3px; display: block;" src="https://cdn.lu.ma/email/instagram.png" width="20" height="20">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
<!-- [if mso | IE]></td><td><![endif]-->
                                
<!-- [if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; padding-top: 32px; word-break: break-word;" align="center">
                                <p style="border-top: solid 1px #ebeced; font-size: 1px; margin: 0px auto; width: 100%;">&nbsp;</p>
<!-- [if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #ebeced;font-size:1px;margin:0px auto;width:568px;" role="presentation" width="568px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
<!-- [if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- [if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin: 0px auto; max-width: 600px;">
      <table style="width: 100%;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
          <tr>
            <td style="direction: ltr; font-size: 0px; padding: 16px 16px 0 16px; text-align: center;"><!-- [if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:568px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                <table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td style="vertical-align: top; padding: 0px;">
                        <table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="font-size: 0px; padding: 0px; word-break: break-word;" align="left">
                                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; text-align: left; color: #131517;">
                                  <div>
                                    <div class="col-50 mj-outlook-group-fix" style="font-size: 0; text-align: left; display: inline-block; vertical-align: top; width: 100%; margin-bottom: 8px;">
                                      <table style="vertical-align: top;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td style="font-size: 0; padding-right: 10px; word-break: break-word;" align="left">
                                              <a href="https://www.soarx.tech">
                                                <img src="https://utfs.io/f/aad5ad0b-3f8b-4181-9556-a186e0f05d56-jh6460.png" width="45" height="15">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div class="col-50 mj-outlook-group-fix" style="font-size: 0; text-align: left; display: inline-block; vertical-align: top; width: 100%; margin-bottom: 8px;">
                                     
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
<!-- [if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- [if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin: 0px auto; max-width: 600px;">
      <table style="width: 100%;" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
          <tr>
            <td style="direction: ltr; font-size: 0px; padding: 0 16px; text-align: center;"><!-- [if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td align="left" class="" style="" ><![endif]-->
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; text-align: left; color: #131517;">
                <a href="https://lu.ma/create?ref=email" style="font-size: 12px; color: #b3b5b7; text-decoration: none !important; padding: 2px;">Host your event with SoarX ↗</a>
              </div>
<!-- [if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- [if mso | IE]></td></tr></table><![endif]-->
  </div>
  <img style="display: none; width: 1px; height: 1px;" src="https://jm54dyh1.r.us-west-2.awstrack.me/I0/0101018cfcb76995-05e008de-024e-4226-841e-98f0e0d61bb1-000000/aidPWdKAI7uUaYOlATqjgOBiguo=357" alt="">
</div>
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
