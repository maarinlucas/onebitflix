// src/database/index.ts

import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_development',
  username: 'postgres',
  password: '29599157',
	define: {
    underscored: true //converte snakecase no db para camel case no js
  }
})