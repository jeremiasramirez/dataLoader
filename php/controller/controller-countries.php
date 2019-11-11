<?php

include "../model/clients.php";

$get_clients = $_GET["getclients"];

if(isset($get_clients) && $get_clients == "get"){
    $clients = new clients();
    $clients->get_clients();
}

