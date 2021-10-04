import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions'
import { config as dotEnvConfig } from 'dotenv'

dotEnvConfig()
const config: SqlServerConnectionOptions & {
  options: {
    trustServerCertificate: boolean
  }
} = {
  type: 'mssql',
  host: '192.168.1.14',
  port: 1433,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB,

  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/db/migrations/*.js'],
  options: {
    trustServerCertificate: true,
  },
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  synchronize: true,
}

export default config
