<?php

$servername = "localhost";
$username = "root";
$password = "abc123Mehak";
$dbname = "teamtracker";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data from the AJAX request
$data = json_decode(file_get_contents("php://input"), true);

$sql = "INSERT INTO signup (First_Name, Last_Name, User_id, Email, Phone_Number, User_Role, Password) VALUES ('$Fname', '$Lname', '$username', '$email', '$phone', '$role', '$password')";

if ($stmt->execute()) {
    echo "Data inserted successfully";
} else {
    echo "Error inserting data: " . $stmt->error;
}


$stmt->close();
$conn->close();
?>
