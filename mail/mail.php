<?php
require("PHPMailer/class.phpmailer.php");
//Retrieve form data.
//GET - user submitted data using AJAX
//POST - in case user does not support javascript, we'll use POST instead
$name = ($_GET['name']) ? $_GET['name'] : $_POST['name'];
$cname = ($_GET['cname']) ? $_GET['cname'] : $_POST['cname'];
$email = ($_GET['email']) ?$_GET['email'] : $_POST['email'];
$mobile = ($_GET['mobile']) ?$_GET['mobile'] : $_POST['mobile'];
$msg = ($_GET['msg']) ?$_GET['msg'] : $_POST['msg'];
 
//flag to indicate which method it uses. If POST set it to 1
if ($_POST) $post=1;

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->SMTPAuth   = true;
$mail->SMTPSecure = "ssl";
$mail->Mailer	  = "pop3";
$mail->Host       = "smtp.bizmail.yahoo.com";
$mail->Port       = 465;
$mail->Username   = "aseth@pegs.co.in";
$mail->Password   = "laserjet1";

$mail->From = "aseth@pegs.co.in";
$mail->FromName = "PEGS";
//$mail->AddAddress('shailendra.singh@viewsourcesoftware.com', 'Shailendra Singh');
$mail->AddAddress('aseth@pegs.co.in', 'Aneesh Seth');
$mail->Subject = "PEGS: ". $cname;
$mail->isHTML(true);
$mail->Body = "
<table>
        <tr><td><b>Name: </b></td> <td>" . $name . "</td></tr>
		<tr><td><b>Company Name: </b></td> <td>" . $cname . "</td></tr>
        <tr><td><b>Email: </b></td> <td>" . $email . "</td></tr>
        <tr><td><b>Mobile: </b></td> <td>" . $mobile . "</td></tr>
        <tr><td><b>Message: </b></td> <td>" . nl2br($msg) . "</td></tr>
    </table>
";
$mail->WordWrap = 70;

if(!$mail->Send())
{
  echo 'Message was not sent.';
  echo 'Mailer error: ' . $mail->ErrorInfo;
}
else
{
  echo 'Message has been sent.';
}
?>