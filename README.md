# Yahtzee Game

Este proyecto es una implementación del clásico juego de dados **Yahtzee** desarrollado en React. Permite a dos jugadores competir lanzando dados, bloqueando valores y acumulando puntos según las reglas del juego.

## Características

- **Lanzamiento de dados**: Los jugadores pueden lanzar hasta 5 dados por turno.
- **Bloqueo de dados**: Los jugadores pueden bloquear dados para conservar sus valores en turnos posteriores.
- **Puntuación automática**: El sistema calcula automáticamente las puntuaciones parciales y totales.
- **Cambio de turno**: Los jugadores alternan turnos después de seleccionar una categoría para puntuar.
- **Finalización del juego**: El juego termina después de 13 rondas por jugador, mostrando las puntuaciones finales.

## Estructura del Proyecto

yatzhee ├── app │ ├── page.js # Componente principal del juego │ ├── page.module.css # Estilos del juego │ └── components │ └── RollsInfo.js # Componente para mostrar información de los lanzamientos ├── utils │ ├── getDieValue.js # Función para generar valores aleatorios de los dados │ └── rollesPointsRules.js # Reglas de puntuación del juego └── README.md # Documentación del proyecto

## Instalación

Instala las dependencias:
Inicia el servidor de desarrollo:

## Cómo Jugar

Cada jugador tiene 13 rondas para acumular puntos.
En cada turno, un jugador puede lanzar los dados hasta 3 veces.
Los dados se pueden bloquear para conservar sus valores.
Después de lanzar, el jugador debe seleccionar una categoría para puntuar.
El juego termina cuando ambos jugadores han completado sus 13 rondas.

## Reglas de Puntuación

Suma de unos, doses, treses, etc.: Suma los valores de los dados que coincidan con la categoría.
Three of a Kind: Suma de todos los dados si hay al menos tres iguales.
Four of a Kind: Suma de todos los dados si hay al menos cuatro iguales.
Full House: 25 puntos si hay un trío y una pareja.
Small Straight: 30 puntos si hay una secuencia de 4 números consecutivos.
Large Straight: 40 puntos si hay una secuencia de 5 números consecutivos.
Chance: Suma de todos los dados.
Yahtzee: 50 puntos si los 5 dados son iguales.

## Tecnologías Utilizadas

React: Biblioteca para construir la interfaz de usuario.
CSS Modules: Para estilos encapsulados.
JavaScript: Lógica del juego y manipulación de datos.