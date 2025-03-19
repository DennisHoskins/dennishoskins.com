<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
if (array_key_exists('DENNISHOSKINS', $_SESSION) == false) {
  echo json_encode(array("message" => "success"));  
  return;
}
if (array_key_exists('EMAIL_SENT', $_SESSION) == true) {
  echo json_encode(array("message" => "success"));  
  return;
}
$_POST = json_decode(file_get_contents("php://input"), true);
$out = email($_POST);
$reply = array("message" => $out);
echo json_encode($reply);
return;

function email($data) {
  if (count($data) == 0) return showError();
  if (!array_key_exists("email", $data)) return "You didn't enter an Email Address";
  $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
  if (strlen($email) < 4) return "You didn't enter an Email Address";
  if (filter_var($email, FILTER_VALIDATE_EMAIL) === false)  return "You entered an invalid Email Address";
  if (!array_key_exists("subject", $data)) return "success";
  $robot = htmlspecialchars(strip_tags($data['subject'] ?? ''));
  if (strlen($robot)) return "success";
  if (!array_key_exists("message", $data)) return "You didn't enter a Message";
  $message = htmlspecialchars(strip_tags($data['message'] ?? ''));
  if (strlen($message) < 1) return "You didn't enter a Message";
  $res = sendEmail($email, $message);
  if (!$res) return "success";
  return $res;
}

function sendEmail($email, $message) {
  try {
    $to = "dennis.r.hoskins@gmail.com";
    $subject = $email . " sent a message from dennishoskins.com";
    $headers = 'From: ' . $email . ' <dennis@dennishoskins.com>' . "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    $body = $message . "\r\n\r\nsent from dennishoskins.com";
    ob_start();
    $mailResult = mail($to, $subject, $body, $headers);
    $res = ob_get_clean();
    if (strpos($res, "Failed") > -1) {
      unset($_SESSION['EMAIL_SENT']);
      return $res;
    }
    $_SESSION['EMAIL_SENT'] = true;
    return $res;
  } catch (Exception $e) {
    unset($_SESSION['EMAIL_SENT']);
    error_log("Exception in sendEmail: " . $e->getMessage());
    return $e;
  }
}
?>