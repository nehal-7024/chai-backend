export const DB_NAME = 'backend';
console.log("URI:", `${process.env.MONGODB_URI}/${DB_NAME}`);
console.log("DB_NAME:", JSON.stringify(DB_NAME));