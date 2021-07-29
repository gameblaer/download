<?php

class EmployeesController extends Controller
{

    // funkcia prida zamestnancov a vypise zoznam pridanych zamestnancov
    public function addEmployees()
    {

        if (($_SERVER['REQUEST_METHOD'] !== 'POST') || (!isset($_POST['employees']))) return;

        if (count($_POST['employees']) > 0) {
            $results = []; //som prerobil na pole kedze vylsedok by bol len z posledneho
            $errors = [];

            $db = new Db(); //nepotrebujem vytvarat zakazdym novy objekt db tak som ju dal mimo foreach
            foreach ($_POST['employees'] as $employee) {
                //takto mam lepsi prehlad co kde vkladam v SQL
                $results[] = $db->save('INSERT INTO employees 
                                     SET `name` = "' . $employee['name'] . '",
                                         `gender` = "' . $this->normalizeGender($employee['gender']) . '",
                                         `birthday` = "' . $employee['birthday'] . '"
                                         ');
            }
            $employeesData = $this->sanitizeData($_POST['employees'], $errors);

            $result = !in_array(false, $results); //ak mam vsade true tak bude success true

            $this->render(__DIR__ . '/../views/new_employees_list.php', [
                'errors' => $errors,
                'success' => $result,
                'employees' => $employeesData,
            ]);
        }
    }

    /** vyberie rod f alebo m ak neni vrati gender
     * @param string $gender
     * @return string
     */
    private function normalizeGender(string $gender): string
    {
        $genderIs = [
            'female' => 'f',
            'male' => 'm',
        ];

        return $genderIs[$gender] ?? $gender;
    }

    /**
     * @param array $employees
     * @param array $errors
     * @return array
     */
    private function sanitizeData(array $employees, array &$errors): array
    {
        #region verzia 1 treba rozbalit a odkomentovat na vyskusanie
        /*
                $nowDate = new DateTime('now');
                foreach ($employees as &$employee) {

                    if (($employee['gender'] === "female") || ($employee['gender'] === "male")) {

                        $gender = $employee['gender'] === "male" ? "muž" : "žena";
                        $employee['gender'] = '<span class="gender gender-' . $this->normalizeGender($employee['gender']) . '">' . $gender . '</span>';


                        if (strlen($employee['name']) > 30) {
                            $errors[] = 'Meno ' . $employee['name'] . ' je príliš dlhé.';
                            $employee['name'] = substr($employee['name'], 0,27) . "...";
                        }

                        try {
                            $employee['age'] = ($nowDate->diff(new DateTime($employee['birthday'])) )->format('%y');
                        } catch (Exception $e) {
                        }
                    }
                }
        */
        #endregion

        #region verzia 2 treba rozbalit
        $genderIs = [
            'female' => 'žena',
            'male' => 'muž',
        ];
        $nowDate = new DateTime('now'); //nemusim vytvarat novy datum pri kazdom cykle ten cyklus nepojde rok
        foreach ($employees as &$employee) {
            /* neviem ci sa pocita aj s tym ze by niekto nevyplnil ci je muz alebo zena,
             * tak som dal obe moznosti,
             * normalne by som sa spytal na to ci je to zena ak neni automaticky je to muz
             * a v takom pripade by som to nemusel mat cele zabalene v if,
             * a ani neviem naco tu mame female a male kedze to vsade pekne nacita bez rozdielu, by som tu podmienku celu zrusil,
             * ale kedze neviem s cim sa rata tak ju necham
             * myslim toto if (($employee['gender'] === "female") || ($employee['gender'] === "male")) {
            */
            if (($employee['gender'] === "female") || ($employee['gender'] === "male")) {

                //kedze tu neni css subor tak neviem ci gender--f alebo gender--m ma byt spravne, tak som ubral jednu pomlcku
                $employee['gender'] = '<span class="gender gender-' . $this->normalizeGender($employee['gender']) . '">' . $genderIs[$employee['gender']] . '</span>';

                if (strlen($employee['name']) > 30) {
                    $errors[] = "Meno " . $employee['name'] . " je príliš dlhé.";
                    $employee['name'] = substr($employee['name'], 0, 27) . "..."; //ked je meno prilis dlhe skratim ho na vypise
                }

                try {
                    $employee['age'] = ($nowDate->diff(new DateTime($employee['birthday'])))->format("%y");
                } catch (Exception $e) {
                }
            }
        }
        #endregion

        return $employees;
    }

    /**
     * Tu sa ocakava obycajne vyrenderovanie bez modifikacie dat
     * V najjednoduchsej forme:
     * include($file);
     *
     * @param string $file nazov suboru, ktory sa vyrenderuje
     * @param array $data data, ktore sa pouziju vo view
     */
    private function render(string $file, array $data)
    {
        extract($data, EXTR_OVERWRITE);
        include($file);
    }
}

