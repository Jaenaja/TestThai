<!DOCTYPE html>
<html>
<head>
	<title>TEST1</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
<?php
// Start the session
session_start();
$_SESSION["run_number"] = rand(1000,9999);
$temp = $_SESSION["run_number"];
?>
<div class="jumbotron jumbotron-fluid text-center">
  <div class="container">
    <h1 class="display-4">Answer = <?php echo $temp;?></h1>
  </div>
</div>
<div class="container">

  <h1>Test1</h1>
  <div id="result"></div>
  <form role="form" id="contactForm" class="contact-form" data-toggle="validator" class="shake">
    <div class="form-group">
      <div class="controls">
        <input id="number" type="text" placeholder="number" class="form-control" name="name" pattern="[0-9]"  maxlength="4" required></input>
      </div>  
    </div>
    <button type="submit" id="submit" class="btn btn-success"><i class="fa fa-check"></i> Check</button>
  </form>
</div>


</body>


<script type="text/javascript">
  $(document).ready(function() {


      $('#submit').click(function(e){
        e.preventDefault();


        var number = $("#number").val();


        $.ajax({
            type: "POST",
            url: "formProcess.php",
            dataType: "json",
            data: {number:number},
            success : function(respone){
                if (respone.status == "success"){
                    if(respone.data.number_true == 4 && respone.data.position_true ==4){
                    	$('#result').html('<div id="result" class="alert alert-success" role="alert"><b>ยินดีด้วย คุณเดาตัวเลขถูกทั้งหมด</b></div>');
                    	alert("ยินดีด้วย คุณเดาตัวเลขถูกทั้งหมด");
                    }else{
                    	alert("เสียใจด้วย คุณเดาตัวเลขยังไม่ถูกทั้งหมด");
                    	$("#result").html('<div id="result" class="alert alert-warning" role="alert"><b>เสียใจด้วย คุณเดาตัวเลขยังไม่ถูกต้อง<br></b>ถูกตัวเลข :'+respone.data.number_true+"<br> ถูกตำแหน่ง : "+respone.data.position_true+'</div>');
                    }
                }else{
                	$("#result").html('<div id="result" class="alert alert-danger" role="alert">'+respone.msg+'</div>');
                }
            }
        });


      });
  });
</script>
</html>