agregar fábrica de movimientos	Se introduce MovementFactory.js para centralizar la creación de instancias de movimientos, eliminando lógica dispersa.

refactor: UI usa fábrica en lugar de switch/new	Se actualiza MovementList.jsx para utilizar la nueva fábrica (createMovement), lo que simplifica la UI y mejora el desacoplamiento.

feat: agregar nuevo tipo de movimiento CHARGEBACK