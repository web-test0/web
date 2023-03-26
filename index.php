<!DOCTYPE html>
<html>
<head>
    <title>Информация про компьютер и IP</title>
</head>
<body>
    <h1>Компьютер</h1>
    <p>Данная страница содержит информацию про ваш компьютер и IP-адрес:</p>
    <ul>
        <li><strong>Операционная система:</strong> <?php echo php_uname('s'); ?></li>
        <li><strong>Процессор:</strong> <?php echo php_uname('m'); ?></li>
        <li><strong>Версия PHP:</strong> <?php echo phpversion(); ?></li>
        <li><strong>IP-адрес:</strong> <?php echo $_SERVER['REMOTE_ADDR']; ?></li>
    </ul>
</body>
</html>