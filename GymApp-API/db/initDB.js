require('dotenv').config();

const { getConnection } = require('./db');
async function initDB() {
  let connection;
  try {
    connection = await getConnection();

    console.log('Borrando tablas existentes');
    await connection.query(`DROP TABLE IF EXISTS activities, user, likes`);

    console.log('Creando tablas)');
    await connection.query(`CREATE TABLE user(
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            email VARCHAR(100)   NOT NULL,
            user_name VARCHAR(100)  NOT NULL,
            password VARCHAR(100) NOT NULL,
            role ENUM("client", "administrator") DEFAULT "client",
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        `);

    await connection.query(`CREATE TABLE activities (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            activity_name VARCHAR(100) UNIQUE NOT NULL,
            description VARCHAR(300) NOT NULL,
            image VARCHAR(100), 
            typology VARCHAR(100) NOT NULL,
            muscle_group VARCHAR(100) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP     
          )
        `);

    await connection.query(
      `CREATE TABLE likes (
            id INT PRIMARY KEY AUTO_INCREMENT,
            user_id INT NOT NULL,
            activity_id INT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (activity_id) REFERENCES activities(id)ON DELETE CASCADE ON UPDATE CASCADE
          )`
    );

    // GRANT INSERT ON activities TO  administrador;

    // GRANTS DELETE ON activities TO administrador;

    //  INSERT INTO activities (id , activity_name, description, image, typology, muscle_group, created_ad);

    // Primero, asegúrate de que la variable `connection` esté configurada correctamente.

    // Inserción de usuarios
    await connection.query(`
INSERT INTO user (email, user_name, password) 
VALUES('tatandeveloper@gymapp.com', 'Tatán', 'HASH_DE_LA_CONTRASEÑA_1'),
  ('jesusdeveloper@gymapp.com', 'Jesús', 'HASH_DE_LA_CONTRASEÑA_2'),
  ('blasdeveloper@gymapp.com', 'Blasco', 'HASH_DE_LA_CONTRASEÑA_3'),
  ('luismartinez.12@gmail.com', 'Luis', 'HASH_DE_LA_CONTRASEÑA_4'),
  ('mariadeveloper@gymapp.com', 'Maria', 'HASH_DE_LA_CONTRASEÑA_5'),
  ('claudiamateo@gmail.com', 'Claudia', 'HASH_DE_LA_CONTRASEÑA_6'),
  ('esteban_89@gmail.com', 'Esteban', 'HASH_DE_LA_CONTRASEÑA_7'),
  ('lupombo@gmail.com', 'Lucía', 'HASH_DE_LA_CONTRASEÑA_8');
`);

    //Inserción de actividades
    await connection.query(`
INSERT INTO activities (Activity_name, Description, Image, Typology, Muscle_group) 
VALUES('Press de pecho', 'Es sin duda el ejercicio más conocido...', NULL, 'Fuerza', 'Pecho'),
  ('Flexiones con peso', 'Las flexiones o push up son de lo más eficaces...', NULL, 'Fuerza', 'Pecho'),
  ('Aperturas de pecho', 'Tumbado boca arriba en el suelo o en el banco...', NULL, 'Fuerza', 'Pecho'),
  ('Aperturas en T con TRX', 'Si tienes un TRX en casa o en el gimnasio...', NULL, 'Fuerza', 'Pecho'),
  ('Cruces de polea', 'En la máquina de poleas del gimnasio...', NULL, 'Fuerza', 'Pecho'),
  ('Band bent over row', 'Con goma elástica en los pies, un remo para dar caña...', NULL, 'Fuerza', 'Espalda'),
  ('Renegade row', 'En posición de plancha, hacemos una flexión y una vez arriba...', NULL, 'Fuerza', 'Espalda'),
  ('Remo con mancuerna a una mano', 'Con una rodilla apoyada en un banco, trabajo de dorsal...', NULL, 'Fuerza', 'Espalda'),
  ('Remo con barra', 'Un básico para ganar fuerza en toda la zona de la espalda...', NULL, 'Fuerza', 'Espalda'),
  ('Hip thrust', 'Uno de los ejercicios activadores con más éxito...', NULL, 'Fuerza/Resistencia', 'Glúteos y piernas'),
  ('Frog pumps', 'Es un buen ejercicio para acabar con el entrenamiento...', NULL, 'Fuerza/Resistencia', 'Glúteos y piernas'),
  ('Abducciones con banda', 'Podemos realizar este ejercicio en la máquina, en bipedestación...', NULL, 'Fuerza/Resistencia', 'Glúteos y piernas'),
  ('Sentadillas búlgaras', 'Este también es un músculo estirador, pero con la particularidad...', NULL, 'Fuerza/Resistencia', 'Glúteos y piernas');
`);
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}
initDB();
