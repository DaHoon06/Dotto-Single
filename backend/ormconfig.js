const ENV = process.env;

module.exports = {
  type: ENV.TYPE,
  host: ENV.HOST,
  port: ENV.PORT,
  username: ENV.USERNAME,
  password: ENV.PASSWORD,
  database: ENV.DATABASE,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
}