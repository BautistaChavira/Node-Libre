# Node-Libre

De momento la página se ve así de simple, solo usamos node para usar express que facilita el formateo a la hora de leer y escribir en el archivo

<img width="750" height="588" alt="image" src="https://github.com/user-attachments/assets/a72cfe1c-f24c-4c80-a3e3-8ad2e7b4da8e" />

La aplicación no se conecta con una base de datos real, guarda las cosas en un archivo. Dado que la mayoría de plataformas como servicio desplegan las páginas en contenedores temporales, lo que se escriba en el archivo se borrará al reiniciar el serivicio (excepto los ejemplos que ya venían escritos en score.json)

<img width="626" height="153" alt="{6C0A55B2-BD7F-4636-8F41-FED31E1C4710}" src="https://github.com/user-attachments/assets/c8ceeaab-bdd9-4689-a43a-14dfe51f87bc" />

así se veía la jerarquía en local, los registros se guardan en data/scores.json

El package ya debería estar configurado para que funcione desplegándalo facilmente sin incluir comandos de inicio específicos, usando solo start y ya
