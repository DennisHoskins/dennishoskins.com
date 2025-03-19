<?php
//unset($_SESSION["EMAIL_SENT"]);
?>
  <body>
    <drh-navbar page="<?php echo $page; ?>"></drh-navbar>
    <drh-code></drh-code>
    <main>
      <drh-header>
<?php if ($page === "index") {
        require("content/index/index_background.php");
} else if ($page === "ugly") { ?>
        <drh-ugly-background id="background"></drh-ugly-background>  
<?php } else { ?>
        <drh-background id="background"></drh-background>   
<?php } ?>
      </drh-header>
      <drh-gradient></drh-gradient>
      <drh-typewriter text="<?php echo $typewriter ?>" main="<?php echo $page === "index"; ?>"></drh-typewriter>
      <?php
      require("content/" . $page . "/" . $page . "_content.php");
      ?>
      <drh-skills id="skills"></drh-skills>
      <drh-contact id="contact" <?php if (array_key_exists('EMAIL_SENT', $_SESSION) === true) echo 'sent="true"'; ?>></drh-contact>
      <drh-footer></drh-footer>
    </main>
    <drh-spinner showing="true"></drh-spinner>
    <drh-modal></drh-modal>
