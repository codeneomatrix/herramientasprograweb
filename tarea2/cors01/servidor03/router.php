<?php
    header("Access-Control-Allow-Origin: http://127.0.0.1:8000");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Headers: X-Requested-With");
    readfile($_SERVER["SCRIPT_FILENAME"]);
