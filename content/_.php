<?php
  ini_set('display_errors', 0);
  session_start();
  $_SESSION["DENNISHOSKINS"] = true;
  require("utility.php");
  // scan("images/work", $resizeImages);
  require("_head.php");
  require("_body.php");
  require("_foot.php");
?>