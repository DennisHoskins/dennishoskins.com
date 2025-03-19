<?php
$resizeImages = function($file, $newWidth = 1200, $newHeight = 1500) {
  if (strpos($file, "favicon") > -1) return;
  if (strpos($file, ".svg") > -1) return;
  if (strpos($file, ".mp4") > -1) return;
  if (strpos($file, ".gif") > -1) return;
  if (strpos($file, ".webm") > -1) return;
  if (strpos($file, "code.png") > -1) return;
  list($width, $height, $type) = getimagesize($file);
  if ($width <= $newWidth && $height <= $newHeight) return;
  echo($file . " == " . $width . "x" . $height ."\n");
  $aspectRatio = $width / $height;
  if ($width >= $height || $width > $newWidth) {
    $targetWidth = $newWidth;
    $targetHeight = $targetWidth / $aspectRatio;
  } else {
    $targetHeight = $newHeight;
    $targetWidth = $targetHeight * $aspectRatio;
  }  
  $sourceImage = imagecreatefromstring(file_get_contents($file));
  $targetImage = imagecreatetruecolor($targetWidth, $targetHeight);
  if (exif_imagetype($file) == IMAGETYPE_PNG || exif_imagetype($file) == IMAGETYPE_GIF) {
    imagealphablending($targetImage, false);
    imagesavealpha($targetImage, true);
    $transparent = imagecolorallocatealpha($targetImage, 255, 255, 255, 127);
    imagefilledrectangle($targetImage, 0, 0, $targetWidth, $targetHeight, $transparent);
  }
  imagecopyresampled($targetImage, $sourceImage, 0, 0, 0, 0, $targetWidth, $targetHeight, $width, $height);  
  $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
  switch ($extension) {
    case 'jpg':
    case 'jpeg':
      imagejpeg($targetImage, $file, 90);
      break;
    case 'png':
      imagepng($targetImage, $file, 9);
      break;
  }
  imagedestroy($sourceImage);
  imagedestroy($targetImage);  
};

$index = 0;
$writeJS = function($js) {
  global $index;
  if ($index++ > 0)  echo("      ");
  echo('<script type="module" src="' . $js . '"></script>'.PHP_EOL); 
};

$writeVideos = function($file) { 
  $name = explode(".", $file);
  if ($name[count($name) - 1] != "webm") return;
  echo('        <source src="' . $file . '">'.PHP_EOL); 
};

$writeImages = function($file) { 
  echo('        <li><drh-job-img class="job-img" src="' . $file . '"></drh-job-img></li>'.PHP_EOL);  
};

function scan($dir, $callback, $subdirs = []) {
  $files = scandir($dir);
  foreach ($files as $key => $value) {
    $path = realpath($dir . DIRECTORY_SEPARATOR . $value);
    if (!is_dir($path)) $result = $callback($dir . "/" . $value);
    else if ($value != "." && $value != "..") {
      if (count($subdirs) == 0 || (count($subdirs) > 0  && in_array($value, $subdirs))) scan($dir . "/" . $value, $callback);
    }
  }  
};

function obj($name) {
  $json = file_get_contents("dat/" . $name . ".json");
  $json = str_replace("'", "^", $json);
  $json = str_replace("  ", "", $json);
  $json = str_replace(" : ", ":", $json);
  $json = str_replace(array("\r", "\n"), '', $json);
  echo $json;
}
?>