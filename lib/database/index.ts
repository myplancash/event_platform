import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
//a cached variable is intent to hold a cached connection to our database
let cached = (global as any).mongoose || {conn: null, promise: null}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn 
  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing')

  //we ether connect to our existing cached connection or we create new one.
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'Vera',
    bufferCommands: false,
  })

  cached.conn = await cached.promise
}

//why this pattern? code executed but not in a single continuos server process 
// you need to manage database connection efficiently, each invocation of a serverless function
// could result in a new connection to database which is inneficient.

// we use server actions and each of it will have to call connectToDatabase 
// multiple times if by caching our conneciton all the subsequence invocation 
//can reuse teh existing connectin or just try to create a new one.