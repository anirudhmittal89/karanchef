<?php
//echo json_encode(glob("*.{jpg,gif,png}", GLOB_BRACE));

$dir = "./public/images/MAINS";

// Open a known directory, and proceed to read its contents
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        echo "[";
        while (($file = readdir($dh)) !== false) {
            echo '{"src":"/images/MAINS/' . $file . '",' . '"caption":' . '"' . $file . '"' . ',"categ":"MAINS"},';
            //echo "filename: $file : filetype: " . filetype($dir . $file) . "\n";
        }
        
        closedir($dh);
    }
    echo "]";
}
?>