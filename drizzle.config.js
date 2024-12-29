/** @type {import("drizzle-kit").Config}*/
export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:i4aQ2cpvFVxw@ep-green-dew-a53kxwzr.us-east-2.aws.neon.tech/HyreAI?sslmode=require'

}
}
