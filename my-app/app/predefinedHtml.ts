export const predefinedHtml = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Styled HTML Page</title>
      <style>
        /* Basic Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Body styling */
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        /* Navbar styling */
        .navbar {
          background-color: #007bff;
          padding: 1rem;
          text-align: center;
          color: #ffffff;
        }
        .navbar h1 {
          font-size: 24px;
          font-weight: bold;
        }

        /* Main container styling */
        .container {
          width: 100%;
          max-width: 900px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        /* Header section */
        .header {
          background: linear-gradient(135deg, #6c63ff, #0099ff);
          padding: 20px;
          color: white;
          text-align: center;
        }
        .header h2 {
          font-size: 32px;
          margin-bottom: 5px;
        }
        .header p {
          font-size: 18px;
        }

        /* Content section */
        .content {
          padding: 20px;
          line-height: 1.6;
        }
        .content h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }
        .content p {
          margin-bottom: 15px;
        }

        /* Button styling */
        .btn {
          display: inline-block;
          background-color: #007bff;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #0056b3;
        }

        /* Footer styling */
        .footer {
          background-color: #f1f1f1;
          text-align: center;
          padding: 15px;
          font-size: 14px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Navbar -->
        <div class="navbar">
          <h1>My Website</h1>
        </div>

        <!-- Header Section -->
        <div class="header">
          <h2>Welcome Here</h2>
          <p>Providing you with the best solutions</p>
        </div>

        <!-- Content Section -->
        <div class="content">
          <h3>About Me</h3>
          <p>
           Hey there! My name is 𝐍𝐚𝐢𝐦𝐚𝐥, and I'm a passionate front-end developer dedicated to creating responsive, visually appealing, and user-friendly web applications.
          </p>
          <p>
            My service include website Development. I work closely with my clients to ensure their
            satisfaction and success.
          </p>
          <a href="//milestone-02-personal-portfolio-web.vercel.app/" class="btn">My Portfolio</a>
        </div>

        <!-- Footer Section -->
        <div class="footer">
          &copy; 2023 My Website. All rights reserved.
        </div>
      </div>
    </body>
  </html>
`;
