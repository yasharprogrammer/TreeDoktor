<!DOCTYPE html>
<html lang="en" style=" margin-bottom: 0px!important;">
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="">
	<meta name="author" content="Main Prospect">
	<link rel="stylesheet" href="<?php echo base_url('assets/vendors/notebook/css/bootstrap.css'); ?>">
	<link rel="stylesheet" href="<?php echo base_url('assets/vendors/notebook/css/font.css'); ?>">
	<link rel="stylesheet" href="<?php echo base_url('assets/vendors/notebook/css/app.css?v='.config_item('app.css')); ?>">
	<link rel="stylesheet" href="<?php echo base_url('assets/css/payroll_pdf.css'); ?>">
</head>
<body style="border: 0!important; margin-bottom: 0px!important;">
	<?php foreach($payrollWorkorders as $key => $payrollHalfWorkorders) : ?>
		<?php $week['number'] = $key; ?>
		<div style="height: 106mm;<?php if(!$key) : ?><?php else : ?>margin-top: 2mm;<?php endif; ?>">
		<?php $this->load->view('payroll_estimator_comission_report_pdf', ['payrollWorkorders' => $payrollHalfWorkorders]);?>
		</div>
	<?php endforeach; ?>

</body>
</html>
