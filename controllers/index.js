const client = require("../db/connection"); // We are going to need our connection file

// The function is asynchronous because we need to wait for our connection to mongodb
async function getPersonalData(req, res) {
  try {
    await client.connect(); // Let's connect to the DB
    const db = client.db("personalSite"); // We need to check the right database
    const collection = db.collection("personalSite"); // Make sure we are in the right collection
    const contacts = await collection.find().toArray(); // Let's find everything in our collection and return it as an array
    res.status(200).send(contacts); // Send the data as a response
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving personal data");
  } finally {
    client.close();
  }
}

module.exports = {
  getPersonalData,
};
