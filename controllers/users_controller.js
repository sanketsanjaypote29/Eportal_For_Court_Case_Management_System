const path = require("path");
const Register_client = require("../model/register1");
const Register_lawyer = require("../model/register");
const { exec } = require("child_process");
module.exports.register = function (req, res) {
  const filePath = path.join(__dirname, "client", "register_client.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.logging = (req, res) => {
  const filePath = path.join(__dirname, "client", "login_client.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.meeting = (req, res) => {
  const filePath = path.join(__dirname, "Video Conference", "room.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.lobby = (req, res) => {
  const filePath = path.join(__dirname, "Video Conference", "lobby.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.email = (req, res) => {
  const filePath = path.join(__dirname, "client", "forget_password.html");
  res.sendFile(filePath);
};
module.exports.new_password = (req, res) => {
  const filePath = path.join(__dirname, "client", "new_password.html");
  res.sendFile(filePath);
};

module.exports.client_register = (req, res) => {
  const dataToSave = {
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    state: req.body.state,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
  };
  const submittedEmail = req.body;

  Register_client.findOne({ email: submittedEmail.email })
    .then((existingUser) => {
      if (existingUser) {
        // return res.status(200).json({ message: 'Already Register' });
        console.log("inside_register_client");
        return res.redirect("/client/register");
      } else {
        Register_client.create(dataToSave);
        // res.status(200).json({ message: 'Thank you for register' });
        return res.redirect("/client/face");
      }
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    });
};
// module.exports.dashboard = async (req, res) => {
//   console.log("Request Body:", req.body);
//   try {

//     const userId = req.body._id;
//     // Fetch user data from the database
//     const userData = await Register_client.findById(userId);
//     // Check if user data exists
//     if (!userData) {
//       return res.status(404).send("User not found");
//     }

//     // Log user data to the console
//     console.log("User Data:", userData);

//     // Render the dashboard template and pass user data to it
//     res.render("dashboard_client", { user: userData });
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

module.exports.client_login = (req, res) => {
  const submittedEmail = req.body;
  Register_client.findOne({ email: submittedEmail.email })
    .then((existingUser) => {
      if (existingUser) {
        if (existingUser.password === submittedEmail.password) {
          res.cookie("client_id", existingUser.id);
          res.redirect("/client/dashboard_client");
          return;
        } else {
          return res.redirect("/client/logging");
          // return res.status(500).json({ message: 'Wrong password:'});
        }
      } else {
        return res.redirect("/client/logging");
      }
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    });
};
// module.exports.Dashboard_client = async (req, res) => {
//   try {
//     const userId = req.cookies.client_id; // Retrieve user ID from cookie
//     // Check if user ID is available
//     if (!userId) {
//       return res.status(401).send("Unauthorized");
//     }

//     // Fetch user data from the database
//     const userData = await Register_client.findById(userId);

//     // Check if user data exists
//     if (!userData) {
//       return res.status(404).send("User not found");
//     }
//     // Log user data to the console
//     console.log("User Data:", userData);
//     // Render the dashboard template and pass user data to it
//     // res.render("dashboard_client", { user: userData });
//     res.render("../controllers/client/dashboard_client");
//     return
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };
// // Assuming you're using Express.js
// const Register_client = require('../models/Register_client');

// module.exports.Dashboard_client = async (req, res) => {
//   try {
//     const userId = req.cookies.client_id;
//     // console.log(lawyerData);
//     // Check if user ID is available
//     if (!userId) {
//       return res.status(401).send("Unauthorized");
//     }
    
//     // Fetch user data from the database
//     const lawyerData = await Register_lawyer.find({});
//     const userData = await Register_client.findById(userId);
//     // console.log(userData);
//     console.log(lawyerData);
//     // Check if user data exists
//     if (!userData) {
//       return res.status(404).send("User not found");
//     }
//     if (!lawyerData) {
//       return res.status(404).send("Lawyer not found");
//     }

//     // Render an HTML page with the user data
//     // res.render('/client/dashboard_client', { userData }); // Assuming you have a template named 'dashboard' to render the user data
//     res.render("../controllers/client/dashboard_client", { userData,lawyerData });
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };
module.exports.Dashboard_client = async (req, res) => {
  try {
    const userId = req.cookies.client_id;
    // Check if user ID is available
    if (!userId) {
      console.log("inside !userId")
      return res.status(401).send("Unauthorized");
    }
    
    // Fetch user data from the database
    const lawyerData = await Register_lawyer.find({});
    const userData = await Register_client.findById(userId);
    
    // Check if user data exists
    if (!userData) {
      return res.status(404).send("User not found");
    }
    if (!lawyerData) {
      return res.status(404).send("Lawyer not found");
    }

    
    // console.log(lawyerData)
    // Send JSON response with formatted lawyer data
    res.render("../controllers/client/dashboard_client", { userData,lawyerData });
    // res.json({ userData, formattedLawyerData });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports.face = (req, res) => {
  // const pythonScript = '/E-Court/E-portal/FaceId/face_client.py';
  const pythonScript = path.join(__dirname, "FaceId", "face_client.py");
  exec(`python ${pythonScript}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing Python script: ${err}`);
      // res.status(500).send('Error executing Python script');
      return;
    }
    console.log(`Python script output: ${stdout}`);
    return res.redirect("/client/logging");
  });
};

// module.exports.Dashboard_client = (req, res) => {
//   res.render("../controllers/client/dashboard_client");
//   return;
// };
module.exports.verify_img = (req, res) => {
  // const pythonScript = '/E-Court/E-portal/FaceId/verify_client.py';
  const pythonScript = path.join(__dirname, "FaceId", "verify_client.py"); // Path to your index.html file
  exec(`python ${pythonScript}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing Python script: ${err}`); 
      res.status(500).send("Error executing Python script");
      return;
    }
    console.log(`Python script output: ${stdout}`);
    return res.redirect("/client/meeting");
  });
};
