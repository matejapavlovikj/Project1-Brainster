
<?php
	$name_surname = $_POST['name_surname'];
	$company = $_POST['company'];
	$email = $_POST['email'];
	$phone= $_POST['phone'];
	$academy = $_POST['academy'];

	// Database connection
	$conn = new mysqli('localhost','root','klienti');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name_surname, company, email, phone, academy) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $name_surname, $company, $email, $phone, $academy,);
        values(i,i);
		$execval = $stmt->execute();
		echo $execval;
		echo "Успешно испратено...";
		$stmt->close();
		$conn->close();
	}
?>
