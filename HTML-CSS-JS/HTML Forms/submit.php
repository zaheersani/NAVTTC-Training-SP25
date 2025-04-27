<!DOCTYPE html>
<html>
<head>
    <title>HTML Form Demo</title>
</head>
<body>

    <h2>Form Submission Received</h2>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Safely collect form data
        $name = htmlspecialchars($_POST["fullname"]);
        $email = htmlspecialchars($_POST["email"]);
        $gender = htmlspecialchars($_POST["gender"]);
        $degree = htmlspecialchars($_POST["degree"]);

        // Handle multiple checkbox values (skills)
        $skills = isset($_POST["skills"]) ? $_POST["skills"] : [];

        echo "<p><strong>Full Name:</strong> $name</p>";
        echo "<p><strong>Email Address:</strong> $email</p>";
        echo "<p><strong>Gender:</strong> $gender</p>";
        echo "<p><strong>Degree Program:</strong> $degree</p>";

        echo "<p><strong>Skills:</strong> ";
        if (!empty($skills)) {
            // If skills is an array (checkbox group)
            if (is_array($skills)) {
                echo implode(", ", array_map('htmlspecialchars', $skills));
            } else {
                echo htmlspecialchars($skills);
            }
        } else {
            echo "No skills selected.";
        }
        echo "</p>";
    } else {
        echo "<p>No data submitted yet.</p>";
    }
    ?>

</body>
</html>
