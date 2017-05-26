<?php
ob_start();

$tomail = 'el-apple076@yandex.ru';

$username = htmlspecialchars(trim($_POST['username']));
if (!isset($username) && strlen($number) > 1) {
  exit('error|Введите правильность имени!');
}

$number = htmlspecialchars(trim($_POST['number']));
if (!isset($number) && strlen($number) > 1) {
  exit('error|Введите контактного номера телефона!');
}

$mobile = htmlspecialchars(trim($_POST['mobile']));
$price = htmlspecialchars(trim($_POST['price']));
$gift = htmlspecialchars(trim($_POST['gift']));
if (!isset($mobile) && strlen($mobile) > 1) {
  exit('error|Введите контактного номера телефона!');
}
$rom = htmlspecialchars(trim($_POST['rom']));
$color = htmlspecialchars(trim($_POST['color']));
if (!isset($rom) && strlen($rom) > 1) {
  exit('error|Выберите версию iPhone!');
}

$message = '<h2>Новый заказ!</h2>
<hr>
<b>Имя:</b> $username <br>
<b>Номер:</b> $number <br>
<b>Модель:</b> $model $color ($rom) <br>
<b>Подарок:</b> $gift <br>
<h3>К оплате: $price (Проверьте правильность суммы!)<h3> <br>
<hr>';
if(mail($tomail, 'Магазин оригинальной техники Apple', $message))
  exit('ok|Мы свяжемся с вами в течении минуты!');
else
  exit('error|Ошибка оформления заказа, повторите попытку позже!');

ob_end_flush();
?>