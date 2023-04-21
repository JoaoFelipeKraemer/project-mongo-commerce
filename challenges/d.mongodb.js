use("commerce");
// db.produtos.updateOne(
//     { nome: "Big Mac" },
//     { $set: { ultimaModificacao: Date } },
//  );
use("commerce");
db.produtos.updateMany(
    {},
    { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
  );
  use("commerce");
 db.produtos.find({});