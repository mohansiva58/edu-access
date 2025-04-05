<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// If this is a preflight OPTIONS request, exit early
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


// Database connection
$servername = "localhost";  
$username = "root"; 
$password = ""; 
$dbname = "resources_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Check if data is received
if (!$data) {
    die(json_encode(["success" => false, "message" => "No data received", "error" => json_last_error_msg()]));
}

// Escape input values for security
$title = $conn->real_escape_string(trim($data['title']));
$description = $conn->real_escape_string(trim($data['description']));
$category = $conn->real_escape_string(trim($data['category']));
$link = $conn->real_escape_string(trim($data['link']));
$image = $conn->real_escape_string(trim($data['image']));

// Validate input (ensure all fields are filled)
if (empty($title) || empty($description) || empty($category) || empty($link) || empty($image)) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit;
}

// Check if table exists
$checkTable = $conn->query("SHOW TABLES LIKE 'resources'");
if ($checkTable->num_rows == 0) {
    echo json_encode(["success" => false, "message" => "Table 'resources' does not exist."]);
    exit;
}

// Insert data into the database
$sql = "INSERT INTO resources (title, description, category, link, image) 
        VALUES ('$title', '$description', '$category', '$link', '$image')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Data stored successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Database Insert Error", "error" => $conn->error]);
}

$conn->close();
?>
