<?php
//echo json_encode(glob("*.{jpg,gif,png}", GLOB_BRACE));

$dir = "./public/images/SAVOURY";

// Open a known directory, and proceed to read its contents
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        echo "[";
        while (($file = readdir($dh)) !== false) {
            echo '{"src":"/images/SAVOURY/' . $file . '",' . '"caption":' . '"' . $name . '"' . ',"categ":"main"},';
            //echo "filename: $file : filetype: " . filetype($dir . $file) . "\n";
        }
        
        closedir($dh);
    }
    echo "]";
}
?>