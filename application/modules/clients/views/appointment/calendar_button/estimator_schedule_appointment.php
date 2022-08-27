<?php

$dates = date('Ymd', strtotime($task['task_date'])).'T'.date('His', strtotime($task['task_start'])).'/'.date('Ymd', strtotime($task['task_date'])).'T'.date('His', strtotime($task['task_end']));

$link = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=New+appointment&dates=".$dates."&details=".str_replace(' ', '+', strip_tags($template))."&location=".$task['full_address'];
?>

<p style='margin-bottom:5px;'><strong>Date:</strong> <?php echo $task['task_date']; ?></p>
<p style='margin-bottom:5px;'>
    <strong>Start:</strong> <?php echo date(getTimeFormat(true), strtotime($task['task_start'])); ?>&nbsp;
    <strong>Finish:</strong> <?php echo date(getTimeFormat(true), strtotime($task['task_end'])); ?>
</p>
<p style='margin-bottom:5px;'><strong>Address:</strong> <?php echo $task['full_address']; ?></p>

<a href="<?php echo $link; ?>" style="display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px;
    font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle;
    cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
    background-image: none; border: 1px solid transparent; color: #fff !important;
    background-color: #4cc0c1; border-color: #4cc0c1; text-decoration:none; border-radius: 4px;">Add event to calendar</a>

</body>