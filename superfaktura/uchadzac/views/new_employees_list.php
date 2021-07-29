<?php
// Povazujte tuto cast za partial - t.j. cast kodu, ktora bude vlozena v inak validnom HTML kode.

//aby mi nesvietilo a nebolo to undefined
$errors = $errors ?? [];
$employees = $employees ?? [];

#region verzia 1 treba rozbalit
/**
 * tato verzia mi pride najprehladnejsia a da sa rychlo v nej zorientovat ak by so chcelo nieco menit
 */
if ($errors) {
    $errorEmployee = "";
    foreach ($errors as $error) {
        $errorEmployee .= "<li>" . $error . "</li>";
    }
    echo "<ul class=\"errors\">" . $errorEmployee . "</ul>";

} else {
    $linesEmployees = "";
    foreach ($employees as $e) {
        $linesEmployees .=
            "<tr>
                <td>" . $e['name'] . "</td>
                <td>" . $e['gender'] . "</td>
                <td>" . $e['birthday'] . " (" . $e['age'] . ")</td>
            </tr>";
    }

    echo "<table>
                <thead>
                <tr>
                    <th>Meno zamestnanca</th>
                    <th>Pohlavie</th>
                    <th>Dátum narodenia (vek)</th>
                </tr>
                </thead>
                <tbody>
                   " . $linesEmployees . "
                </tbody>
            </table>";
}
#endregion

#region verzia 2 treba rozbalit
/** tuto verziu som spravil z dovodu ze bude vsetko postupne v jednej premenej
 */
/*
if ($errors) {
    $errorEmployee = "<ul class=\"errors\">";
    foreach ($errors as $error) {
        $errorEmployee .= "<li>" . $error . "</li>";
    }
    echo $errorEmployee . "</ul>";
} else {
    $tableEmployees = "<table>
                            <thead>
                            <tr>
                                <th>Meno zamestnanca</th>
                                <th>Pohlavie</th>
                                <th>Dátum narodenia (vek)</th>
                            </tr>
                            </thead>
                            <tbody>";

                            foreach ($employees as $e) {
                                $tableEmployees .=
                                    "<tr>
                                        <td>" . $e['name'] . "</td>
                                        <td>" . $e['gender'] . "</td>
                                        <td>" . $e['birthday'] . " (" . $e['age'] . ")</td>
                                    </tr>";
                            }
    echo $tableEmployees . "</tbody></table>";
}
*/
#endregion

#region verzia 3 treba rozbalit a odkomentovat
/**
 * tuto verziu som spravil z dovodu aby vypisalo co spravilo aj ked bude error a vo funkcii som spravil prikaz ktory skrati jeho meno na vypise
 */
/*
if ($errors) {
    $errorEmployee = "";
    foreach ($errors as $error) {
        $errorEmployee .= "<li>" . $error . "</li>";
    }
    echo "<ul class=\"errors\">" . $errorEmployee . "</ul>";

}
$linesEmployees = "";
foreach ($employees as $e) {
    $linesEmployees .=
        "<tr>
                <td>" . $e['name'] . "</td>
                <td>" . $e['gender'] . "</td>
                <td>" . $e['birthday'] . " (" . $e['age'] . ")</td>
            </tr>";
}

echo "<table>
                <thead>
                <tr>
                    <th>Meno zamestnanca</th>
                    <th>Pohlavie</th>
                    <th>Dátum narodenia (vek)</th>
                </tr>
                </thead>
                <tbody>
                   " . $linesEmployees . "
                </tbody>
            </table>";
*/
#endregion