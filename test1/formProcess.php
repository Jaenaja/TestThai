<?php


$errorMSG = "";
$data;
$result;
session_start();
$temps = strval($_SESSION['run_number']);
$number = $_POST["number"];
if($number == null || !is_numeric($number)){
    echo json_encode(['status'=>'error','msg'=>'ข้อมูลไม่ถูกต้อง', 'data'=>""]);
    return '';

}
for ($i = 0; $i < strlen($temps); $i++) {
    if($temps[$i] == $number[$i]){
        $result[$i] = true;
    }else{
        $result[$i] = false;
    }
}
$result_same_num = count(array_diff(str_split($temps),str_split($number)));
$result_same_num = count(str_split($temps))-$result_same_num;

$data['position_true'] = count(array_filter($result));
$data['number_true'] = $result_same_num;

echo json_encode(['status'=>'success', 'data'=>$data]);
return '';
