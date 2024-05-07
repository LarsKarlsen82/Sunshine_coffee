Der er front-end (Sunshine_coffee) og der er back-end (SunshineCoffee_API)
Front-end henter data fra back-end, så man skal starte dem begge.

Man skal have back-end klar for at kunne se resultater.

For at starte begge servere:

1. Åbn terminalen
2. Åbn Git Bash
3. cd ~
4. dir
5. find din SunshineCoffee-API
6. tast "node server.js"

7. Så åbn powershell
8. tast "Npm run dev"

Vejledning til back-end:

Sunshine Coffee API:

Sunshine Coffee API er et api med brugerstyring og mulighed for at hente produkter, oprette brugere og logge ind. Dette API er lavet så du blot skal downloade det og sætte det op.

Guide til installation
Start med at hente projektet ned. Herefter skal du navigere til roden og køre npm install

Opret en ny fil .env i roden og indsæt følgende: Husk at indsætte USER, PASSWORD og DB, som kommer fra din database Bruger du en anden DB end MySQL skal DIALECT også tilrettes

PORT=8081
JWT_REFRESH_EXPIRATION=30000000
JWT_EXPIRATION=1400000
JWT_SECRET=64_CIFRE_LANG_KODE_HER
HOST=localhost
USER=root
PASSWORD=DIT_ROOT_PASSWORD
DIALECT=mysql
DB=sunshine
Åben dit foretrukne program til at styre din database (mysql workbench) og opret en ny database ved navn: sunshine

Gå ind i filen config.json og ændre password til dit DB password

Kør kommandoen: node server.js for at oprette tables i databasen

Luk serveren igen og kør kommandoen: npx sequelize-cli db:seed:all

Nu skulle du kunne starte serveren ved at skrive i terminalen: node server.js

Api dokumentation
Link til postman dokumentation: https://www.postman.com/speeding-crater-307106/workspace/personal-workspace/collection/31531123-a9fdfff6-3cf7-40a3-b72d-632011a8422e?action=share&creator=31531123
