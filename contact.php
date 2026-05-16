<?php
// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    exit(0);
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Get the raw POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$to = 'sukruthamfarmstay@gmail.com';
$subject = isset($data['_subject']) ? $data['_subject'] : 'New Website Form Submission';

$message = "You have received a new submission from your website:\n\n";
foreach ($data as $key => $value) {
    // Exclude internal fields
    if ($key !== '_subject' && $key !== '_template' && $key !== '_next') {
        $message .= ucfirst($key) . ": " . $value . "\n\n";
    }
}

// Setup headers
$replyTo = isset($data['Email']) ? $data['Email'] : (isset($data['email']) ? $data['email'] : 'noreply@sukruthamfarmstay.com');
$headers = "From: website@sukruthamfarmstay.com\r\n"; // Update this if your server requires a specific sender
$headers .= "Reply-To: " . $replyTo . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Check server mail configuration.']);
}
?>
