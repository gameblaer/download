<?php

/**
 * Mock classa na spustenie ukazky
 * Tuto nie je potrebne upravovat, nebude sa zapocitavat do vyhodnotenia
 */
class Db
{
    public function save($query, $data = [])
    {
        return true;
    }
}
