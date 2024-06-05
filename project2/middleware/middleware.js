function generateEmailTemplate(heading, subject, name, content) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${subject}</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #007bff;
                color: #ffffff;
                padding: 10px 0;
                text-align: center;
            }
            .content {
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                color: #999999;
                font-size: 12px;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>${heading}</h1>
            </div>
            <div class="content">
                <p>Dear ${name},</p>
                <p>${content}</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

// Example usage:
const heading = "Welcome to Our Service!";
const subject = "Welcome Aboard";
const name = "John Doe";
const content =
  "Thank you for joining our service. We are thrilled to have you on board.";

const emailTemplate = generateEmailTemplate(heading, subject, name, content);
console.log(emailTemplate);
