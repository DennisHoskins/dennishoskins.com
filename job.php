<?php
  $job = $_SERVER["QUERY_STRING"];
  if (isset($job )) {
    if ($job === "ugly_little_games") {
      $page = "ugly";
      $title = "UGLY";
      $typewriter = "Ugly<br>Little<br>Games";
      $code = ["ugly"];
      require("content/_.php");
      return;
    }
    if (file_exists("dat/" . $job . ".json")) {
      $page = "job";
      $title = $job;
      $typewriter = str_replace("_", "<br>", $job);
      $code = ["job"];
      require("content/_.php");
      return;
    }
  }
  $page = "404";
  $title = $job;
  $typewriter = "404 //<br>Page Not Found:<br>" . $job;
  $code = ["404", "work"];
  require("content/_.php");
?>